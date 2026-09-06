import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

const ProductDetails = ({ addToCart }) => {

  const { id } = useParams();

  const {
    data,
    loading,
    error,
  } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error-box">
        ❌ {error}
      </div>
    );
  }

  return (
    <div className="details-page">

      <div className="details-image">
        <img src={data.image} alt={data.title} />
      </div>

      <div className="details-content">

        <span className="category">
          {data.category}
        </span>

        <h1>{data.title}</h1>

        <div className="big-rating">
          ⭐ {data.rating?.rate} / 5
        </div>

        <h2>${data.price}</h2>

        <p>
          {data.description}
        </p>

        <button
          className="primary-btn"
          onClick={() => addToCart(data)}
        >
          🛒 Add to Cart
        </button>

        <Link
          to="/products"
          className="back-link"
        >
          ← Back to Products
        </Link>

      </div>

    </div>
  );
};

export default ProductDetails;