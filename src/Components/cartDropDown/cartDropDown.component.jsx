import { useContext } from "react";
import { CartContext } from "../Contexts/Cart.context.jsx";
import "./cartdropDown.styles.scss";
import chair from '../images/image.jpg';
import CartItem from "../cartitem/cartItem.component.jsx";

function CartDropDown() {
  const cartArray = [
    { id: 1, itemName: "addidas dmn", itemPrice: 300, quantity:1 },
    { id: 2, itemName: "addidas sambas", itemPrice: 500 ,quantity:1},
    { id: 3, itemName: "addidas sambas", itemPrice: 500 ,quantity:1},
  ];
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cartDropDown">
      {cartItems.map(({id,itemName,itemPrice,quantity}) => {
        return (
          <div key={id} className="cartItem">
            <div className="imageContainer">
              <img src={chair} />
            </div>
            <div className="itemData">
              <h1>{itemName}</h1>
              <h4>
                {quantity} x ${itemPrice}
              </h4>
            </div>
          </div>
        );
      })}
      <button>go to checkout</button>
    </div>
  );
}

export default CartDropDown;
