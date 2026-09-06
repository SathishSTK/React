import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addProduct,
  updateProduct,
  deleteProduct,
} from "../redux/productSlice";

const Admin = () => {

  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.products.products
  );

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "electronics",
    image: "https://via.placeholder.com/150",
  });

  const [editId, setEditId] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title || !formData.price) {
      alert("Please enter product name and price.");
      return;
    }

    if (editId) {

      dispatch(
        updateProduct({
          ...formData,
          id: editId,
          price: Number(formData.price),
        })
      );

      setEditId(null);

    } else {

      dispatch(
        addProduct({
          ...formData,
          price: Number(formData.price),
          description: "New NovaCart product",
          rating: {
            rate: 4.5,
          },
        })
      );

    }

    setFormData({
      title: "",
      price: "",
      category: "electronics",
      image: "https://via.placeholder.com/150",
    });
  };

  const handleEdit = (product) => {
    setEditId(product.id);

    setFormData({
      title: product.title,
      price: product.price,
      category: product.category,
      image: product.image,
    });
  };

  return (
    <div className="page">

      <div className="page-heading">
        <span>ADMIN PANEL</span>
        <h1>Product Management</h1>

        <p>
          Add, update and delete products using Redux.
        </p>
      </div>

      <div className="admin-wrapper">

        <form
          className="admin-form"
          onSubmit={handleSubmit}
        >

          <h2>
            {editId ? "✏️ Update Product" : "➕ Add Product"}
          </h2>

          <input
            name="title"
            placeholder="Product Name"
            value={formData.title}
            onChange={handleChange}
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">
              Men's Clothing
            </option>
            <option value="women's clothing">
              Women's Clothing
            </option>
          </select>

          <input
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />

          <button className="primary-btn">
            {editId ? "Update Product" : "Add Product"}
          </button>

        </form>

        <div className="admin-products">

          <h2>
            Products ({products.length})
          </h2>

          {products.map((product) => (

            <div
              className="admin-product"
              key={product.id}
            >

              <img
                src={product.image}
                alt={product.title}
              />

              <div>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>

              <button
                className="edit-btn"
                onClick={() => handleEdit(product)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() =>
                  dispatch(deleteProduct(product.id))
                }
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Admin;