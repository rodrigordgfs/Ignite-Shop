import Image from "next/image";
import { IProducts } from "../../../../interfaces/IProduct";
import {
  CartItemContainer,
  CartItemImage,
  CartItemImageContainer,
  CartItemInfo,
} from "../../../../styles/components/cartItem";
import { CartContext } from "../../../../context/Cart";
import { useContext } from "react";

interface CartItemProps {
  product: IProducts;
}

export function CartItem({ product }: CartItemProps) {
  const { removeProduct } = useContext(CartContext);

  function handleRemoveProduct() {
    removeProduct(product.id);
  }

  return (
    <CartItemContainer>
      <CartItemImageContainer>
        <CartItemImage src={product.imageUrl} alt="" width={90} height={90} />
      </CartItemImageContainer>
      <CartItemInfo>
        <h3>{product.name}</h3>
        <p>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(Number(product.price) / 100)}
        </p>
        <button onClick={handleRemoveProduct}>Remover</button>
      </CartItemInfo>
    </CartItemContainer>
  );
}
