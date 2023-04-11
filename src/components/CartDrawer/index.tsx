import { useContext } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { SettingsContext } from "../../context/Settings";
import {
  CartDrawerContainer,
  CartDrawerInfo,
  CartQuantity,
  CheckoutButton,
  CloseCartDrawerButton,
  TitleCartDrawer,
  TotalValue,
} from "../../styles/components/cartDrawer";
import closeImg from "../../assets/close.svg";
import { CartContext } from "../../context/Cart";
import { CartItem } from "./components/CartItem";

export function CartDrawer() {
  const { isDrawerMenuOpen, toogleDrawerMenu } = useContext(SettingsContext);
  const { productsCart, cartQuantity, cartTotalValue } =
    useContext(CartContext);

  return (
    <Drawer
      open={isDrawerMenuOpen}
      onClose={toogleDrawerMenu}
      direction="right"
      size={400}
    >
      <CartDrawerContainer>
        <div>
          <CloseCartDrawerButton
            src={closeImg}
            alt=""
            width={24}
            height={24}
            onClick={toogleDrawerMenu}
          />
        </div>

        <TitleCartDrawer>Sacola de compras</TitleCartDrawer>

        {cartQuantity > 0 ? (
          <CartDrawerInfo>
            <div>
              {productsCart().map((product) => {
                return <CartItem key={product.id} product={product} />;
              })}
            </div>

            <p>Quantidade</p>
            <CartQuantity>{cartQuantity} items</CartQuantity>

            <p>Valor Total</p>
            <TotalValue>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(cartTotalValue) / 100)}
            </TotalValue>
          </CartDrawerInfo>
        ) : (
          <p>sem produtos</p>
        )}

        {cartQuantity > 0 && <CheckoutButton>Finalizar Compra</CheckoutButton>}
      </CartDrawerContainer>
    </Drawer>
  );
}
