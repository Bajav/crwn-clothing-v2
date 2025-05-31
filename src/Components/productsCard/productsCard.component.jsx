// style
import "./products.card.scss";
import { useContext } from "react";
import { CartContext } from "../Contexts/Cart.context";
import chair from '../images/image.jpg';

const ProductCard = (item) => {
    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(item);
    const {name,imageUrl,price} = item;
    <div className="card-container">
        <div className="imageContainer">
            <img src={chair} />
        </div>
        <div className="functionsContainer">
            <h4>{name}</h4>
            <h4>{price}</h4>
            <button>add to cart</button>
        </div>
    </div>
};

export default ProductCard;
