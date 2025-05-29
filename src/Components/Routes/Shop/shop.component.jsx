import { Fragment } from "react/jsx-runtime";
import shopData from "../../data/Shop.data.json";


const Shop = () => {
  return (
    <div>
      {shopData.map(({id,name})=>{
       return(
        <div key={id}>
          <h1>{name}</h1>
        </div>
       )
      })}
    </div>
  );
};

export default Shop;
