import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-badge">
          ✨ Welcome to NovaCart
        </span>

        <h1>
          Shop Smart.
          <br />
          Live Better.
        </h1>

        <p>
          Discover amazing products, unbeatable prices and
          a smooth shopping experience designed for you.
        </p>

        <div className="hero-buttons">
          <Link to="/products" className="primary-btn">
            Explore Products
          </Link>

          <Link to="/about" className="secondary-btn">
            Learn More
          </Link>
        </div>

      </div>

      <div className="hero-image">
        🛍️
      </div>

    </section>
  );
};

export default Home;