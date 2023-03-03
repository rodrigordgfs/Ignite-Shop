import Image from "next/image";

import { HomeContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from "keen-slider/react";

import Camiseta1 from "../assets/camisetas/1.png";

import "keen-slider/keen-slider.min.css";
import { GetServerSideProps } from "next";

import { stripe } from "../lib/stripe";
import Stripe from "stripe";

interface IProduct {
  id: string;
    title: string;
    imageUrl: string;
    price: number;
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
          <Product key={id} className="keen-slider__slide">
            <Image src={Camiseta1} width={520} height={480} alt="" />
            <footer>
              <strong>{title}</strong>
              <span>{price}</span>
            </footer>
          </Product>
        );
      })}
    </HomeContainer>
  );
}

export const serverSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      title: product.name,
      imageUrl: product.images[0],
      price: (price.unit_amount || 0)  / 100,
    } as IProduct;
  });

  return {
    props: {
      products,
    },
  };
};
