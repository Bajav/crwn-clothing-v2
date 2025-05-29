import { useState } from "react";

function Cart() {
    // state for cart
    const [dropDown,setDropDown]= useState(false);
    // togle cart
    const togleCart =(e)=>
        {
            console.log("cart clicked");
            setDropDown(true);
        }
  return (
    <div className='cartContainer' onClick={togleCart}>
        {!dropDown ? <h1>hello</h1> :<h2>hi</h2>}
    </div>
  )
}

export default Cart

// toggle to dropDown
// show cart items
// show items total