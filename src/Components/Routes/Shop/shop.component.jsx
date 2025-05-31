import { Fragment, useContext } from "react";
import { ProductContext } from "../../Contexts/product.context";
// import components
import ProductCard from "../../productsCard/productsCard.component";
import image from "../../images/image.jpg";
// import styles
import "../../productsCard/products.card.scss";
import "./shop.styles.scss";

const Shop = () => {
  const { product } = useContext(ProductContext);
  return (
    <div className="shop_page">
      <div className="productsContainer">
        {product.map((product) => {
          // console.log(product);
          return <ProductCard key={product.id} item={product} />;
        })}
      </div>
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
