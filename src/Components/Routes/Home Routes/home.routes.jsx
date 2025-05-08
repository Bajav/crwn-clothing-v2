import { Routes, Route, Outlet } from "react-router-dom";
import Directory from "../../Directory/directory.component";
import { Fragment } from "react";

const Shop = () => {
  return <h1>i am shop</h1>;
};

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

function HomeRoute() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Directory />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default HomeRoute;
