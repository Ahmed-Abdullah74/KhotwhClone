// Import React and Bootstrap components
import React from "react";
import { Link } from "react-router-dom";

import Offcanvas from "react-bootstrap/Offcanvas";
import "../css/sideCart.css";
import EmptyCart from "../images/cart.png";
// Import Redux hooks and actions
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "../rtk/slices/sideBarSlice";
import { Image } from "react-bootstrap";
import { deletefromCart } from "../rtk/slices/cart-slice";

// Define the component
function SideCart() {
  const cart = useSelector((state) => state.cart);

  // Use the useSelector hook to access the state of the offcanvas sidebar
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  // Use the useDispatch hook to dispatch actions
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  // Define handlers for opening and closing the offcanvas sidebar

  const handleClose = () => {
    dispatch(closeSidebar());
  };

  // Return the JSX element
  return (
    <>
      <Offcanvas show={isOpen} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <div className="text-uppercase text-center w-100 cart-heading">
            SHOPPING CART
          </div>
        </Offcanvas.Header>

        <Offcanvas.Body className="p-0">
          {
            <>
              {cart.length === 0 ? (
                <div className="empty-cart text-center ">
                  <Image src={EmptyCart} alt=".." className="mb-3" />
                  <p className="empty-cart-p">Your shopping cart is empty</p>
                  <Link to={"/#"} className="text-decoration-none">
                    Continue shopping
                  </Link>
                </div>
              ) : (
                <>
                  <tbody style={{ marginBottom: "5px", width: "380px" }}>
                    <div className="cart-item text-center">Cart item</div>
                    {cart.map((product) => (
                      <>
                        <tr
                          className="p-2"
                          style={{
                            height: "70px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          key={product.id}
                        >
                          <td
                            className="text-start d-flex "
                            style={{
                              width: "248px",
                              fontSize: "13px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              style={{ height: "50px", marginRight: "5px" }}
                              src={product.image}
                            />
                            {product.title}
                          </td>
                          <td style={{}}>
                            <div
                              className=" d-flex align-items-center justify-content-center"
                              style={{ fontSize: "13px", fontWeight: "500" }}
                            >
                              EGP {product.price * product.quantity}
                            </div>
                            <div className="d-flex justify-content-center align-items-center ">
                              <div className="quantity d-flex justify-content-center align-items-center ">
                                <span
                                  className="material-symbols-outlined"
                                  style={{ color: "red" }}
                                  onClick={() =>
                                    dispatch(deletefromCart(product))
                                  }
                                >
                                  delete
                                </span>
                                <div
                                  className="d-flex justify-content-center align-items-center"
                                  style={{
                                    height: "30px",
                                    width: "95px",
                                    border: "1px solid #eee",
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                    borderRadius: "5px",
                                  }}
                                >
                                  <div
                                    className="minus d-flex justify-content-center align-items-center"
                                    style={{ width: "30px" }}
                                  >
                                    <span className="material-symbols-outlined">
                                      remove
                                    </span>
                                  </div>
                                  <div
                                    className="number d-flex justify-content-center align-items-center"
                                    style={{
                                      width: "30px",
                                      fontSize: "16px",
                                      padding: "2px",
                                      borderRight: "1px solid #eee",
                                      borderLeft: "1px solid #eee",
                                    }}
                                  >
                                    {product.quantity}
                                  </div>
                                  <div
                                    className="add d-flex justify-content-center align-items-center"
                                    style={{ width: "30px" }}
                                  >
                                    <span className="material-symbols-outlined">
                                      add
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                  <div
                    className="subtotal mt-2 d-flex align-items-baseline justify-content-between ps-2 pe-2"
                    style={{ borderTop: "1px solid #eee" }}
                  >
                    <div className="text-start">Subtotal:</div>
                    <div className="text-end">{totalPrice.toFixed(2)}</div>
                  </div>
                </>
              )}
            </>
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// Export the component
export default SideCart;
