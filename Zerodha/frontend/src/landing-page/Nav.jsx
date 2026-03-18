import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-body-tertiary mb-5 "
      style={{ padding: "1rem 4.5rem" }}
    >
      <div className="container-fluid">
        {/* Logo on the left */}
        <NavLink to={"/" } className="navbar-brand">
        <img src="media/images/logo.svg" style={{ height: "1.05rem" }} alt="Logo" />

        </NavLink>

        {/* Mobile toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav items aligned to the right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item" style={{ marginRight: "1.1rem" }}>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Signup
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginRight: "1.1rem" }}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginRight: "1.1rem" }}>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginRight: "1.1rem" }}>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Pricing
              </NavLink>
            </li>
            <li className="nav-item" style={{ marginRight: "1.1rem" }}>
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Support
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
