import { useContext } from "react";
import { ProductContext } from "../../Contexts/product.context";

const Shop = () => {
  const {product} = useContext(ProductContext)
  return (
    <div>
      {product.map(({id,name})=>{
        // console.log(id,name);
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
