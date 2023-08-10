import { Container, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { deletefromCart } from "../rtk/slices/cart-slice";
import { useEffect } from "react";
function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
    const cartItems = localStorage.getItem("cartItems");
    const cartData = JSON.parse(cartItems);
    console.log(cartData);
  }, [cart]);
  return (
    <>
      <h1>Your Bag</h1>
      <Container>
        <Table>
          <thead>
            <tr>
              <th className="text-start">product</th>
              <th className="text-center">Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td className="text-start">
                  <Image style={{ height: "100px" }} src={product.image} />{" "}
                  {product.title}
                </td>
                <td style={{ height: "100px" }}>
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    EGP {product.price}
                  </div>
                </td>
                <td style={{ height: "100px" }}>
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="quantity d-flex justify-content-center align-items-center ">
                      <span
                        className="material-symbols-outlined"
                        style={{ color: "red" }}
                        onClick={() => dispatch(deletefromCart(product))}
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
                          className="number"
                          style={{
                            width: "30px",
                            fontSize: "16px",
                            padding: "2px",
                          }}
                        >
                          {product.quantity}
                        </div>
                        <div
                          className="add d-flex justify-content-center align-items-center"
                          style={{ width: "30px" }}
                        >
                          <span className="material-symbols-outlined">add</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ height: "100px" }}>
                  {" "}
                  <div className="h-100 d-flex justify-content-center align-items-center">
                    {product.price * product.quantity}
                  </div>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="total-price text-end">
          subtotal: EGP {totalPrice.toFixed(2)}
        </div>
      </Container>
    </>
  );
}

export default Cart;
