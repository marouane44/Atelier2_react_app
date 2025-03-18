import '../styles/ProductItem.css';
import CareScale from './CareScale';

function ProductItem({ name, scale, price, onAddToCart }) {
    const handleClick = () => {
        onAddToCart(name, price); // Send name + price
    };
    
    return (
        <div className="product-item">
            <h3>{name}</h3>
            <CareScale scaleValue={scale} />
            <p>Prix: {price}€</p>
            <button className="add-button" onClick={handleClick}>
                Ajouter
            </button>
        </div>
    );
}

export default ProductItem;
