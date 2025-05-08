import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import './navgation.routes.styles.scss';

const NavBar = () => {
    return (
      <Fragment>
        <nav className="nav-items">
            <Link to="">logo</Link>
            <ul className="navlinks">
                <Link to="/">home</Link>
                <Link to="/shop">shop</Link>
            </ul>
            <ul className="navlinks">
                <Link  to="">Sign in</Link>
                <Link  to="">Sign out</Link>
            </ul>
        </nav>
        <Outlet />
      </Fragment>
    );
  };

  export default NavBar;