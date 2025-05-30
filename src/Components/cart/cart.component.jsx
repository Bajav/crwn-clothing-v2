import { useState, useEffect } from "react";
// import styles
import "./cart.styles.scss";
// import components
import CartItem from "../cartitem/cartItem.component";

function Cart() {
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

  // state for cart
  return (
    <div className="cartContainer" onClick={()=>{}}>
      <h6>
        cart <span>{0}</span>
      </h6>
    </div>
  );
}

export default Cart;

// toggle to dropDown
// show cart items
// show items total

      // <div className="dropDownCart">
      //     {cartArray.map(({ id, itemName, itemPrice }) => {
      //       return (
      //         <CartItem key={id} itemName={itemName} itemPrice={itemPrice} />
      //       );
      //     })}
      //     <button onClick={closeCart}>close</button>
      //   </div>