import { useState, createContext } from "react";

// Utility to add item to cart
const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingItem) {
    // Increase quantity
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // Add new item with quantity: 1
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// Create context with default values
export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

// Provider component
export const CartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setCartOpen,
    cartItems,
    addItemToCart, // ✅ Correct method added to context
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
