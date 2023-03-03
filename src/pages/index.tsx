import Image from "next/image";
import { styled } from "../styles";
import { HomeContainer, Product } from "../styles/pages/home";

import Camiseta1 from '../assets/camisetas/1.png'
import Camiseta2 from '../assets/camisetas/2.png'
import Camiseta3 from '../assets/camisetas/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={Camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>Camista X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={Camiseta2} width={520} height={480} alt="" />
        <footer>
          <strong>Camista X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
