import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="logo">
        🛍️ NovaCart
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;