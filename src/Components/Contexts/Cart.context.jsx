import { useState, createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
    
};

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems , setCartItems] = useState([]);
  const addItemToCart = (productToAdd)=>{
    setCartItems(addCartItem(cartItems,productToAdd));
  };
  const value = { isCartOpen, setCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
