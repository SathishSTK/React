import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 Saish Tech Park. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default Layout;