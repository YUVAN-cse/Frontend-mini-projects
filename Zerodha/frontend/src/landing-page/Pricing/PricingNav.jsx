import { NavLink } from "react-router-dom";

export default function PricingNav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary fs-3"
      style={{ padding: "1rem 4.5rem" }}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ gap: "2rem" }}
          >
            <li className="nav-item">
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-dark" : "text-dark"}`
                }
              >
                Equity
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/pricing/currency"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-dark fw-bold" : "text-primary"}`
                }
              >
                Currency
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/pricing/commodity"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-dark fw-bold" : "text-primary"}`
                }
              >
                Commodity
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
