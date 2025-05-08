import { Outlet } from "react-router-dom";
import { Fragment } from "react";

const NavBar = () => {
    return (
      <Fragment>
        <div>
          <h1>i am navbar</h1>
        </div>
        <Outlet />
      </Fragment>
    );
  };

  export default NavBar;