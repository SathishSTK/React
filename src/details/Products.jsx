import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import { setProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const Products = ({ addToCart }) => {

  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.products.products
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const searchInput = useRef(null);

  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "all";

  const {
    data,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  useEffect(() => {
    if (data.length > 0) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  const handleSearch = (event) => {
    setSearchParams({
      search: event.target.value,
      category,
    });
  };

  const handleCategory = (event) => {
    setSearchParams({
      search,
      category: event.target.value,
    });
  };

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

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
    <div className="page">

      <div className="page-heading">
        <span>OUR COLLECTION</span>
        <h1>Explore Products</h1>

        <p>
          Find everything you need in one place.
        </p>
      </div>

      <div className="filter-box">

        <input
          ref={searchInput}
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={handleSearch}
        />

        <select
          value={category}
          onChange={handleCategory}
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">
            Men's Clothing
          </option>
          <option value="women's clothing">
            Women's Clothing
          </option>
          <option value="jewelery">
            Jewelery
          </option>
          <option value="electronics">
            Electronics
          </option>
        </select>

        <button
          className="focus-btn"
          onClick={() => searchInput.current.focus()}
        >
          Focus Search
        </button>

      </div>

      {filteredProducts.length === 0 ? (

        <div className="empty-box">
          <h2>😕 No Products Found</h2>
          <p>Try another search.</p>
        </div>

      ) : (

        <div className="product-grid">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}

        </div>

      )}

    </div>
  );
};

export default Products;