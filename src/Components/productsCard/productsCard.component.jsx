// style
import "./products.card.scss";
import chair from '../images/image.jpg';
import { useContext } from "react";
import { CartContext } from "../Contexts/Cart.context";

const ProductCard = ({ name, imageUrl, price, ...item }) => {
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart({ name, imageUrl, price, ...item });

  return (
    <div className="card-container">
      <div className="imageContainer">
        <img src={imageUrl || chair} alt={name} />
      </div>
      <div className="functionsContainer">
        <h4>{name}</h4>
        <h4>${price}</h4>
        <button onClick={addProductToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;