import { Routes, Route } from "react-router-dom";
import Directory from "../../Directory/directory.component";

const Shop = () => {
  return <h1>i am shop</h1>;
};

function HomeRoute() {
  return (
    <Routes>
      <Route path="/" element={<Directory />}>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default HomeRoute;
