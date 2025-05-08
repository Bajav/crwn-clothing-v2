import { Routes, Route, Outlet } from "react-router-dom";
// importing components
import Directory from "../../Directory/directory.component";
import NavBar from "../Navigation Routes/navigation.routes";
import SignIn from "../signIn/signIn.component";
import SignOut from "../signOut/signOut.component";
const Shop = () => {
  return <h1>i am shop</h1>;
};


function HomeRoute() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Directory />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signOut" element={<SignOut />} />
      </Route>
    </Routes>
  );
}

export default HomeRoute;
