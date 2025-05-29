import "./cartItem.styles.scss";
import chair from "../images/image.jpg";

function CartItem(item) {
  return (
    <div className="cartItem">
      <div className="imageContainer">
        <img src={chair} />
      </div>
      <div className="itemData">
        <h1>{item.itemName}</h1>
        <h4>2 x ${item.itemPrice}</h4>
      </div>
    </div>
  );
}

export default CartItem;
