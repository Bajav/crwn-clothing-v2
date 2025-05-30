import { useContext } from "react";
import { CartContext } from "../Contexts/Cart.context";
// import styles
import "./cart.styles.scss";
// import components
import cartIcon from '../images/004 shopping-bag.svg';

function Cart() {
  const { isCartOpen,setCartOpen } = useContext(CartContext);
  const toggle =()=> setCartOpen(!isCartOpen);
  // state for cart
  return (
    <div className="cartContainer" onClick={toggle}>
        <img src={cartIcon} alt="cartIcon"/>
        <span>{0}</span>
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