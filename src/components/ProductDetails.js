import "../css/productDetails.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import { setProducts } from "../rtk/slices/products-slice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sympl from "../images/sympl-logo.svg";
import Carousel from "./Carousel";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import { setWomenProducts } from "../rtk/slices/WomenProductSlice";
function ProductDetails() {
  const womenProducts = useSelector(setWomenProducts);
  const products = useSelector(setProducts);
  const [item, setItem] = useState([]);
  const params = useParams();

  useEffect(() => {
    products
      // eslint-disable-next-line eqeqeq
      .filter((product) => product.id == params.productId)
      .map((item) => setItem(item));
  }, [products, params.productId]);
  useEffect(() => {
    womenProducts
      // eslint-disable-next-line eqeqeq
      .filter((product) => product.id == params.productId)
      .map((item) => setItem(item));
  }, [womenProducts, params.productId]);

  return (
    <>
      <div className="product bg-white ">
        <Container>
          <span
            className="text-start d-flex flex-start"
            style={{ fontSize: "12px" }}
          >
            Home / {item.title}
          </span>
          <div
            className="row g-1 product-details"
            style={{ marginBottom: "50px" }}
          >
            <div className="col-lg-7">
              <img src={item.image} alt="product_image" className="img-fluid" />
            </div>
            <div className="col-lg-4">
              <div className=" text-start p-3 bg-white">
                <h3 className="mb-4">{item.title}</h3>
                <h4 className="mb-4">EGP {item.price}</h4>
                <SymplGroup>
                  <SymplText>
                    <p>
                      Pay over 3 payments of <span>37.5 EGP</span> with your
                      bank card.
                    </p>
                    <span>0 interest.</span> <span>0 registration.</span>
                  </SymplText>
                  <SymplImg src={sympl} />
                </SymplGroup>
                <span className="mb-1">Size:</span>
                <ul className="ms-0 list-unstyled d-flex justify-content-around align-items-center size-list">
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
                <span style={{ marginBottom: "20px" }}>
                  Color: {item.color}
                </span>
                <div className="size-guid d-flex align-items-center mb-4">
                  <span className="material-symbols-outlined">checkroom</span>
                  <a href="/#">Size Guid</a>
                </div>
                <div className="numberOfItems mb-4 d-flex align-items-center justify-content-between p-1">
                  <div className="remove d-flex align-items-center ms-1">
                    <span className="material-symbols-outlined icon remove">
                      remove
                    </span>
                  </div>
                  <div className="quantity d-flex align-items-center">1</div>
                  <div className="add d-flex align-items-center me-1">
                    <span className="material-symbols-outlined icon add">
                      add
                    </span>
                  </div>
                </div>
                <div className="buttons row g-3 mb-4">
                  <div className="add col-6">
                    <button className="btn btn-danger text-uppercase add-btn d-flex align-items-center justify-content-center w-100">
                      <span className="material-symbols-outlined me-1 bag">
                        shopping_bag
                      </span>
                      <span className="cart-text"> add to cart</span>
                    </button>
                  </div>
                  <div className="buy col-6">
                    <button className="btn btn-danger  text-uppercase buy-btn  w-100">
                      <span className="cart-text"> but it now</span>
                    </button>
                  </div>
                </div>
                <div className="favorit d-flex align-items-center bg-white mb-4 z-1">
                  <span className="material-symbols-outlined me-3">
                    favorite
                  </span>
                  <span>Add to wishlist</span>
                </div>
                <div className="share bg-white">
                  <span>Share:</span>
                  <div className="facebook d-flex align-items-center justify-content-center">
                    <FontAwesomeIcon icon={faFacebookF} className="me-2 icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Carousel title={"Related Products"} />
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default ProductDetails;

const SymplGroup = styled.div`
  border: 1px solid #eee;
  margin-bottom: 20px;
  padding: 10px;
  color: black;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  p {
    margin-botton: 3px;
  }
`;
const SymplText = styled.div``;
const SymplImg = styled.img``;
