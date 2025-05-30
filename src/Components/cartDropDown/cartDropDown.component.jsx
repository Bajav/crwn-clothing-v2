import './cartdropDown.styles.scss';
import CartItem from '../cartitem/cartItem.component.jsx';

function CartDropDown() {
  return (
       <div className="cartDropDown">
        <CartItem />
           <button>go to checkout</button>
       </div>
  )
}

export default CartDropDown;