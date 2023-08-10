import { Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { openCart } from "../rtk/slices/openCart-slice";
import { openSidebar } from "../rtk/slices/sideBarSlice";
import Logo from "../images/header-logo.png";
import "../css/navbar.css";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  // Use the useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Define handlers for opening and closing the offcanvas sidebar
  const handleOpen = () => {
    dispatch(openSidebar());
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  "
        style={{ backgroundColor: "#fff", position: "relative" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/#" style={{ width: "20%" }}>
            <Image src={Logo} alt=".." style={{ width: "65%" }} />
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link  text-uppercase"
                  aria-current="page"
                  to="/sale"
                >
                  sale
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to={"/new-arrivals"}>
                  new arrivals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to={"/women"}>
                  women
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to={"/men"}>
                  men
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to={"/#"}>
                  uniform by khotwh
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="nav-icons d-flex align-items-center justify-content-between"
            style={{ width: "160px" }}
          >
            <Link className="search d-flex align-items-center icon">
              <span className="material-symbols-outlined">search</span>
            </Link>
            <Link className="user d-flex align-items-center icon">
              <span className="material-symbols-outlined">person</span>
            </Link>
            <Link
              className="heart d-flex align-items-center icon"
              to={"/favorite"}
            >
              <span className="material-symbols-outlined">favorite</span>
            </Link>
            <Link className="bag d-flex align-items-center icon" to={"/cart"}>
              <span className="material-symbols-outlined">shopping_bag</span> Bag(
              {cart.length})
            </Link>
          </div>
        </div>
      </nav>
      <div className="cart-icon" onClick={handleOpen}>
        <span className="material-symbols-outlined">shopping_cart</span>
        <div className="counter">{cart.length}</div>
      </div>
    </>
  );
}

export default Navbar;
