import Link from "next/link";
import { CartButton, HeaderContainer } from "../../styles/pages/app";
import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import cartImg from "../../assets/cart.svg";
import { SettingsContext } from "../../context/Settings";
import { useContext } from "react";
import { CartDrawer } from "../CartDrawer";
import { CartContext } from "../../context/Cart";

export function Header() {
  const { toogleDrawerMenu } = useContext(SettingsContext);
  const { cartQuantity } = useContext(CartContext);

  return (
    <>
      <CartDrawer />
      <HeaderContainer>
        <Link href="/">
          <Image src={logoImg} alt="" />
        </Link>
        <CartButton onClick={toogleDrawerMenu}>
          {cartQuantity > 0 && <span>{cartQuantity}</span>}
          <Image src={cartImg} alt="" width={24} height={24} />
        </CartButton>
      </HeaderContainer>
    </>
  );
}
