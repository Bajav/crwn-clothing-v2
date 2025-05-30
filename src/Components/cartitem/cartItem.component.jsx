import { useEffect, useState } from "react";
import "./cartItem.styles.scss";
import chair from "../images/image.jpg";

function CartItem(item) {
  const [cartItems, setCartItems] = useState(0);
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
    <div className="cartDropDown">
      {cartArray.map(({ id, itemName, itemPrice }) => {
        return (
          <div key={id} className="cartItem">
            <div className="imageContainer">
              <img src={chair} />
            </div>
            <div className="itemData">
              <h1>{itemName}</h1>
              <h4>2 x ${itemPrice}</h4>
            </div>
          </div>
        );
      })}
      <button>go to checkout</button>
    </div>
  );
}

export default CartItem;
