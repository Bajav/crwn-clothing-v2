import './cartdropDown.styles.jsx';
import CartItem from '../cartitem/cartItem.component.jsx';

function cartDropDown() {
  return (
       <div className="cartDropDown">
        <CartItem />
           <button>go to checkout</button>
       </div>
  )
}

export default cartDropDown