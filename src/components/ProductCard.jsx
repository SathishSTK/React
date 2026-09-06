import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-content">

        <span className="category">
          {product.category}
        </span>

        <h3>
          {product.title.length > 45
            ? product.title.substring(0, 45) + "..."
            : product.title}
        </h3>

        <p className="price">
          ${product.price}
        </p>

        <p className="rating">
          ⭐ {product.rating?.rate || "4.5"}
        </p>

        <div className="card-buttons">

          <Link
            to={`/products/${product.id}`}
            className="details-btn"
          >
            View Details
          </Link>

          <button
            className="cart-btn"
            onClick={() => addToCart(product)}
          >
            Add Cart
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;