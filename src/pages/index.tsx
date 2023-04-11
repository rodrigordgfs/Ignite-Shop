import Image from "next/future/image";
import Head from "next/head";
import { GetStaticProps } from "next";
import Link from "next/link";

import cartWhiteImg from "../assets/cart-white.svg";

import { useKeenSlider } from "keen-slider/react";

import { stripe } from "../lib/stripe";
import { HomeContainer, Product } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";
import Stripe from "stripe";
import { IProducts } from "../interfaces/IProduct";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../context/Products";
import { CartContext } from "../context/Cart";

interface HomeProps {
  data: IProducts[];
}

export default function Home({ data }: HomeProps) {
  const { handleSetProducts } = useContext(ProductsContext);
  const { addProductToCart } = useContext(CartContext);

  useEffect(() => {
    handleSetProducts(data);
  }, [data, handleSetProducts]);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {data.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(Number(product.price) / 100)}
                    </span>
                  </div>
                  <div onClick={() => addProductToCart(product.id)}>
                    <Image src={cartWhiteImg} alt="" width={32} height={32} />
                  </div>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      priceId: price.id,
    };
  }) as IProducts[];

  return {
    props: {
      data: products,
    },
    revalidate: 60 * 60 * 2, // 2 hours,
  };
};
