import { NavLink, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div className="page">

      <div className="page-heading">
        <span>OUR SERVICES</span>
        <h1>What We Offer</h1>

        <p>
          Explore our professional digital services.
        </p>
      </div>

      <div className="service-layout">

        <div className="service-menu">

          <NavLink to="web">
            💻 Web Development
          </NavLink>

          <NavLink to="app">
            📱 App Development
          </NavLink>

          <NavLink to="design">
            🎨 UI/UX Design
          </NavLink>

        </div>

        <div className="service-content">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default Services;