import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo.svg";
import cartImg from "../assets/cart.svg";
import { CartButton, Container, Header } from "../styles/pages/app";

import Image from "next/future/image";
import Link from "next/link";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <CartButton>
          <span>1</span>
          <Image src={cartImg} alt="" width={24} height={24} />
        </CartButton>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}

export default App;
