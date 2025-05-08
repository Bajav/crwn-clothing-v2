import { Routes, Route, Outlet } from "react-router-dom";
// importing components
import Directory from "../../Directory/directory.component";
import NavBar from "../Navigation Routes/navigation.routes";

const Shop = () => {
  return <h1>i am shop</h1>;
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
