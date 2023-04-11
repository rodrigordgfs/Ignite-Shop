import Link from "next/link";
import {
  ImageContainer,
  ImagesListContainer,
  SuccessContainer,
} from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  products: [
    {
      name: string;
      imageUrl: string;
    }
  ];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImagesListContainer>
          {products?.map((product) => {
            return (
              <ImageContainer key={product.name}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={100}
                  height={100}
                  objectFit="cover"
                />
              </ImageContainer>
            );
          })}
        </ImagesListContainer>

        <p>
          Uhuul! <strong>{customerName}</strong>, Sua compra de{" "}
          <strong>{products?.length} Camisetas</strong> já esta a caminho da sua
          casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const products = session.line_items.data.map((item) => {
    return item.price.product as Stripe.Product;
  });

  return {
    props: {
      customerName,
      products: products.map((product) => ({
        name: product.name,
        imageUrl: product.images[0],
      })),
    },
  };
};
