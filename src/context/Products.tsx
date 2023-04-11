import { ReactNode, createContext, useState } from "react";
import { IProducts } from "../interfaces/IProduct";

interface IProductsContext {
  products: IProducts[];
  handleSetProducts: (products: IProducts[]) => void;
}

interface IProductsContextProps {
  children: ReactNode;
}

export const ProductsContext = createContext({} as IProductsContext);

export function ProductsContextProvider({ children }: IProductsContextProps) {
  const [products, setProducts] = useState<IProducts[]>([]);

  function handleSetProducts(products: IProducts[]) {
    setProducts(products);
  }

  return (
    <ProductsContext.Provider value={{ products, handleSetProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
