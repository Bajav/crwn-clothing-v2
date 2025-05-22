import { Routes, Route } from "react-router-dom";
// importing components
import Directory from "../../Directory/directory.component";
import NavBar from "../Navigation Routes/navigation.routes";
import SignIn from "../signIn/signIn.component";
import SignOut from "../signOut/signOut.component";
import SignUp from "../../SignUp/signUp.component";
import Shop from "../Shop/shop.component";


function HomeRoute() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Directory />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="signOut" element={<SignOut />} />
      </Route>
    </Routes>
  );
}

export default HomeRoute;
