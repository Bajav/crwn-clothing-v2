// import styles
import "./cart.styles.scss";
// import components
import cartIcon from '../images/004 shopping-bag.svg';

function Cart() {
  // state for cart
  return (
    <div className="cartContainer" onClick={()=>{}}>
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