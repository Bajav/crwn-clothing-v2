import { useState, createContext } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const itemExist = cartItems.find((item) => item.id === productToAdd.id);
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// return cartItems.map((cartItem) => {
//   !itemExist ? { ...cartItem, quantity: cartItem.quantity + 1 }
//     : cartItem;
// });
export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = { isCartOpen, setCartOpen, cartItems, addCartItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
