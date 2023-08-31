import React from "react";
import "../css/productsSection.css";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import { addToCart } from "../rtk/slices/cart-slice";
import { useDispatch } from "react-redux";

import Products from "../Data/menProductsdata.json";
import "../css/productsSection.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Men() {
  const dispatch = useDispatch();
  return (
    <div className="men-products mb-4">
      <Container>
        <span
          className="text-start d-flex flex-start"
          style={{ fontSize: "12px" }}
        >
          Home / Men
        </span>
        <Row>
          {Products.map((item) => (
            <Col sm={6} md={4} lg={3} key={item.id} className="col-6">
              <div className="item-card mb-4 ">
                <Link to={`/product/${item.id}`}>
                  <div className="item-image d-flex justify-content-center mb-2">
                    <Image src={item.image} alt={"..."} className="img-fluid" />
                  </div>
                </Link>
                <div className="item-card-body">
                  <Link
                    to={`/product/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h6
                      style={{
                        marginBottom: "2px",
                        fontSize: "12px",
                        color: "#233c50",
                        fontWeight: "400",
                      }}
                    >
                      {item.title}
                    </h6>
                  </Link>
                  <p style={{ fontSize: "18px", color: "#233c50" }}>
                    EGP {item.price.toFixed(2)}
                  </p>
                  <ul className="ms-auto me-auto list-unstyled d-flex justify-content-around align-items-center size-list">
                    <li>
                      <a className="text-decoration-none" href="/#" alt="...">
                        M
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="/#" alt="...">
                        L
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="/#" alt="...">
                        XL
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="/#" alt="...">
                        2XL
                      </a>
                    </li>
                    <li>
                      <a className="text-decoration-none" href="/#" alt="...">
                        3XL
                      </a>
                    </li>
                  </ul>
                  <div className="button">
                    <Button
                      variant="danger"
                      className="d-flex align-items-center justify-content-center text-uppercase add"
                      style={{ padding: "4px 10px" }}
                      onClick={() => dispatch(addToCart(item))}
                    >
                      <span className="material-symbols-outlined me-1">
                        shopping_bag
                      </span>
                      add to cart
                    </Button>
                    <div className="icons">
                      <span className="material-symbols-outlined heart">
                        favorite
                      </span>
                      <span className="material-symbols-outlined eye">
                        visibility
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Men;
