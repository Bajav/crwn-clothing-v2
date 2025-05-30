import { useEffect, useState } from "react";
import "./cartItem.styles.scss";
import chair from "../images/image.jpg";

function CartItem(item) {
  const {itemName,quantity,itemPrice}=item; 
        return (
          <div className="cartItem">
            <div className="imageContainer">
              <img src={chair} />
            </div>
            <div className="itemData">
              <h1>{itemName}</h1>
              <h4>{quantity} x ${itemPrice}</h4>
            </div>
          </div>
        );
}

export default CartItem;
