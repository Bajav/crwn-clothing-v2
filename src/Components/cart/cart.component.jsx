import { useState, useEffect } from "react";
// import styles
import "./cart.styles.scss";
// import components
import CartItem from "../cartitem/cartItem.component";

function Cart() {
  // state for cart
  const [dropDown, setDropDown] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  // togle cart
  const togleCart = () => {
    console.log("cart clicked");
    setDropDown(true);
  };
  const closeCart = () => {
    setDropDown(false);
  };
  const cartArray = [
    {
      id: 1,
      itemName: "addidas dmn",
      itemPrice: 300,
    },
    {
      id: 2,
      itemName: "addidas sambas",
      itemPrice: 500,
    },
      {
      id: 3,
      itemName: "addidas sambas",
      itemPrice: 500,
    },
      {
      id: 4,
      itemName: "addidas sambas",
      itemPrice: 500,
    },
      {
      id: 5,
      itemName: "addidas sambas",
      itemPrice: 500,
    },
  ];
  useEffect(() => {
    setCartItems(cartArray.length);
  }, []);
  return (
    <div className="cartContainer" onClick={togleCart}>
      <h6>
        cart <span>{cartItems}</span>
      </h6>
      <div className="dropDownCart">
        {cartArray.map(({ id,itemName,itemPrice}) => {
           return( <CartItem key={id} itemName={itemName} itemPrice={itemPrice}/>)
        })}
        <button onClick={closeCart}>close</button>
      </div>
    </div>
  );
}

export default Cart;

// toggle to dropDown
// show cart items
// show items total
