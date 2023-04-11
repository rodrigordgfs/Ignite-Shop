import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { Container } from "../styles/pages/app";

import { ProductsContextProvider } from "../context/Products";
import { Header } from "../components/Header";
import { SettingsContextProvider } from "../context/Settings";
import { CartContextProvider } from "../context/Cart";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <SettingsContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <Container>
            <Header />
            <Component {...pageProps} />
          </Container>
        </CartContextProvider>
      </ProductsContextProvider>
    </SettingsContextProvider>
  );
}

export default App;
