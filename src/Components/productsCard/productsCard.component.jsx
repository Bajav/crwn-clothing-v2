// style
import "./products.card.scss";

const ProductCard = (props) => {
    // const {name,imageUrl,price} = product;
    <div className="card-container">
        <div className="imageContainer">
            <img src={props.src} />
        </div>
        <div className="functionsContainer">
            <h4>{props.name}</h4>
            <h4>{props.price}</h4>
            <button>add to cart</button>
        </div>
    </div>
};

export default ProductCard;
