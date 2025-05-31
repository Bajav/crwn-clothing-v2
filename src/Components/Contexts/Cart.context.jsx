import { useState, createContext } from "react";

let itemExist;
const addCartItem = (cartItems, productToAdd) => {
  console.log("b4", itemExist);
  cartItems.find((cartItem) => {
    if (cartItem.id === productToAdd.id) {
      itemExist = cartItem;
      if(itemExist === false){
        return {...cartItem,quantity: cartItem.quantity + 1}
      }else{
        return cartItem
      }
    };
  });
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
