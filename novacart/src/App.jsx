import { useReducer } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./details/Home";
import About from "./details/About";
import Products from "./details/Products";
import ProductDetails from "./details/ProductDetails";
import Services from "./details/Services";
import WebDevelopment from "./details/WebDevelopment";
import AppDevelopment from "./details/AppDevelopment";
import UIUXDesign from "./details/UIUXDesign";
import Cart from "./details/Cart";
import Contact from "./details/Contact";
import Admin from "./details/Admin";

import cartReducer, {
  initialCartState,
} from "./reducer/cartReducer";

import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {

  const [cartState, dispatchCart] = useReducer(
    cartReducer,
    initialCartState
  );

  const { darkMode } = useContext(ThemeContext);

  const addToCart = (product) => {
    dispatchCart({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <BrowserRouter>

      <div className={darkMode ? "app dark" : "app"}>

        <Navbar />

        <Routes>

          {/* Main Routes */}

          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/products"
            element={
              <Products addToCart={addToCart} />
            }
          />

          {/* useParams */}

          <Route
            path="/products/:id"
            element={
              <ProductDetails
                addToCart={addToCart}
              />
            }
          />

          {/* Nested Routes */}

          <Route
            path="/services"
            element={<Services />}
          >
            <Route
              path="web"
              element={<WebDevelopment />}
            />

            <Route
              path="app"
              element={<AppDevelopment />}
            />

            <Route
              path="design"
              element={<UIUXDesign />}
            />
          </Route>

          {/* Cart */}

          <Route
            path="/cart"
            element={
              <Cart
                cart={cartState.cart}
                dispatchCart={dispatchCart}
              />
            }
          />

          {/* Contact */}

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* Redux CRUD */}

          <Route
            path="/admin"
            element={<Admin />}
          />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
};

export default App;