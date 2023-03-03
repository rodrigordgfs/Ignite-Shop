import Image from "next/image";

import { HomeContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from "keen-slider/react";

import Camiseta1 from "../assets/camisetas/1.png";

import "keen-slider/keen-slider.min.css";
import { GetStaticProps } from "next";

import { stripe } from "../lib/stripe";
import Stripe from "stripe";

import Link from "next/link";

interface IProduct {
  id: string;
  title: string;
  imageUrl: string;
  price: string;
}

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(({ id, title, imageUrl, price }) => {
        return (
          <Link key={id} href={`/product/${id}`}>
            <Product className="keen-slider__slide">
              <Image src={Camiseta1} width={520} height={480} alt="" />
              <footer>
                <strong>{title}</strong>
                <span>{price}</span>
              </footer>
            </Product>
          </Link>
        );
      })}
    </HomeContainer>
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
      title: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency",
      }).format((price.unit_amount || 0) / 100),
    } as IProduct;
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
