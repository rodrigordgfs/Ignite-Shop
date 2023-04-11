import { ReactNode, createContext, useContext, useState } from "react";
import { ICart } from "../interfaces/ICart";
import { ProductsContext } from "./Products";
import { IProducts } from "../interfaces/IProduct";

interface ICartContext {
  cartQuantity: number;
  cartTotalValue: number;
  productsCart: () => IProducts[];
  addProductToCart: (id: string) => void;
  isProductInCart: (id: string) => boolean;
  removeProduct: (id: string) => void;
}

interface ICartContextProps {
  children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);

export function CartContextProvider({ children }: ICartContextProps) {
  const [cart, setCart] = useState<ICart[]>([]);

  const { products } = useContext(ProductsContext);

  function productsCart() {
    return cart.map((data) => {
      return products.find((product) => product.id === data.id) as IProducts;
    }) as IProducts[];
  }

  function addProductToCart(id: string) {
    const productExists = cart.find((product) => product.id === id);

    if (!productExists) {
      setCart([...cart, { id }]);
    }
  }

  function removeProduct(id: string) {
    const productExists = cart.find((product) => product.id === id);

    if (productExists) {
      const newCart = cart.filter((product) => product.id !== id);
      setCart(newCart);
    }
  }

  function isProductInCart(id: string) {
    return !!cart.find((product) => product.id === id);
  }

  const cartTotalValue = productsCart().reduce((acc, product) => {
    return acc + Number(product.price);
  }, 0);

  const cartQuantity = cart.length;

  return (
    <CartContext.Provider
      value={{
        cartQuantity,
        cartTotalValue,
        productsCart,
        addProductToCart,
        isProductInCart,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
