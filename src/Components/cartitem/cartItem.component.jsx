import { useEffect, useState,useContext } from "react";
import { CartContext } from "../Contexts/Cart.context";
import "./cartItem.styles.scss";
import chair from "../images/image.jpg";

function CartItem(item) {
  const {itemName,itemPrice,quantity}=item; 
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
