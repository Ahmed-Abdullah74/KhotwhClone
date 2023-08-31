import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import { addToCart } from "../rtk/slices/cart-slice";
import { useDispatch } from "react-redux";
import "../css/productsSection.css";
import { Link } from "react-router-dom";
import Products from "../Data/WomenProductsData.json";
const WomenProducts = (props) => {
  // Use the useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  return (
    <div className="men-products mb-4">
      <Container>
        <Row>
          {Products.map((item) => (
            <Col sm={6} md={4} lg={3} key={item.id} className="col-6">
              <div className="item-card mb-4 ">
                <Link to={`/product/${item.id}`}>
                  <div className="item-image d-flex justify-content-center">
                    <Image src={item.image} alt={"..."} className="img-fluid" />
                  </div>
                </Link>
                <div className="item-card-body">
                  <Link to={`/product/${item.id}`}>
                    <p
                      style={{
                        marginBottom: "2px",
                        fontSize: "14px",
                        color: "#233c50",
                      }}
                    >
                      {item.title.slice(0, 25)}
                    </p>
                  </Link>
                  <p style={{ fontSize: "18px", color: "#233c50" }}>
                    EGP {item.price.toFixed(2)}
                  </p>
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
          )).slice(1, 13)}
        </Row>
      </Container>
    </div>
  );
};

export default WomenProducts;
