import { BrowserRouter } from "react-router-dom";
import HomeRoute from "./Components/Routes/Home Routes/home.routes";
const App = () => {
  return (
    <BrowserRouter>
      <HomeRoute />
    </BrowserRouter>
  );
};

export default App;
