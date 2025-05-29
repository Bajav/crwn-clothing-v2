import { useState,useEffect } from "react";
// import styles
import "./cart.styles.scss";
// import components
import chair from "../images/image.jpg";

function Cart() {
  // state for cart
  const [dropDown, setDropDown] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  // togle cart
  const togleCart = (e) => {
    console.log("cart clicked");
    setDropDown(true);
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
  ];
    useEffect(()=>{setCartItems(cartArray.length);},[])
  return (
    <div className="cartContainer" onClick={togleCart}>
      <h6>cart <span>{cartItems}</span></h6>
      {cartArray.map(({id,itemName,itemPrice}) => {
        return (
          <div key={id} className="dropDownCart">
            <div className="cartItem">
              <div className="imageContainer">
                <img src={chair} />
              </div>
              <div className="itemData">
                <h1>{itemName}</h1>
                <h4>2 x ${itemPrice}</h4>
              </div>
            </div>
          </div>
        );
      })}
      {/* {!dropDown ? <h1>hello</h1> :<h2>hi</h2>} */}
    </div>
  );
}

export default Cart;

// toggle to dropDown
// show cart items
// show items total
