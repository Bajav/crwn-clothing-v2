import { createContext, useContext, useState } from "react";

export const productContext = createContext({
  product: null,
  setProduct: () => null,
});
export const productContextProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const value = { product, setProduct };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};
