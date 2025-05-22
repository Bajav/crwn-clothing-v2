import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import './navgation.routes.styles.scss';

const NavBar = () => {
    return (
      <Fragment>
        <div className="nav">
        <nav className="nav-items">
            <Link to="">logo</Link>
            <ul className="navlinks">
                <Link to="/">home</Link>
                <Link to="/shop">shop</Link>
            </ul>
            <ul className="navlinks">
                <Link  to="/signUp">Sign up</Link>
                <Link  to="/signIn">Sign in</Link>
                <Link  to="/signOut">Sign out</Link>
            </ul>
        </nav>
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default NavBar;