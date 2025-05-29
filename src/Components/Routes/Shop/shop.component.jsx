import { Fragment, useContext } from "react";
import { ProductContext } from "../../Contexts/product.context";
// import components
import ProductCard from "../../productsCard/productsCard.component";
const Shop = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="shop page">
      {product.map(({ id, name, imageUrl, price }) => {
        // console.log(product);
        return (
          <Fragment>
            <div key={id} className="card-container">
              <div className="imageContainer">
                <img src={imageUrl} />
              </div>
              <div className="functionsContainer">
                <h4>{name}</h4>
                <h4>{price}</h4>
                <button>add to cart</button>
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Shop;
//  <ProductCard
//               key={id}
//               name={name}
//               imageUrl={imageUrl}
//               price={price}
//             />
