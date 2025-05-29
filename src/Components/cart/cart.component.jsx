import { useState, useEffect } from "react";
// import styles
import "./cart.styles.scss";
// import components
import CartItem from "../cartitem/cartItem.component";

function Cart() {
  // state for cart
  const [dropDown, setDropDown] = useState(true);
  // togle cart
  const togleCart = () => {
    console.log("cart clicked");
    setDropDown(true);
  };
  const closeCart = () => {
    setDropDown(false);
  };

  return (
    <div className="cartContainer" onClick={togleCart}>
      <h6>
        cart <span>{0}</span>
      </h6>
      {dropDown &&
      <div className="dropDownCart">
        {cartArray.map(({ id,itemName,itemPrice}) => {
           return(<CartItem key={id} itemName={itemName} itemPrice={itemPrice}/>);
        })}
        <button onClick={closeCart}>close</button>
      </div>}
    </div>
  );
}

export default Cart;

// toggle to dropDown
// show cart items
// show items total
