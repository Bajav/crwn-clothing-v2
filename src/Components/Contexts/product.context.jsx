import { createContext, useState } from "react";
import products from '../data/Shop.data.json'

export const ProductContext = createContext({
  product: [],
  setProduct: () => null,
});
export const ProductsProvider = ({ children }) => {
  const [product, setProduct] = useState(products);
  const value = { product};
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
