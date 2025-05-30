import { Link, Outlet } from "react-router-dom";
import { Fragment, useState } from "react";
import "./navgation.routes.styles.scss";
import SignInOutFunc from "../../SigninOutFunc/SignInOutFunc.Component";
import Cart from "../../cart/cart.component";
import CartItem from "../../cartitem/cartItem.component";

const NavBar = () => {
  const { userActive, setUserAc } = useState(false);
  return (
    <Fragment>
      <div className="nav">
        <nav className="nav-items">
          <Link to="">logo</Link>
          <ul className="navlinks">
            <Link to="/">home</Link>
            <Link to="/shop">shop</Link>
            <Link to="/signIn">sign In</Link>
            <Link to="/signUp">sign UP</Link>
          </ul>
          <Cart />
        </nav>
        <CartItem />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
