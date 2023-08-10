import { useParams } from "react-router-dom";
import "../css/productDetails.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

function ProductDetails() {
  const products = "http://localhost:9000/menProducts";
  const [product, setProduct] = useState({});
  const params = useParams();
  console.log(product);

  useEffect(() => {
    fetch(`${products}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => {
        console.log(product);
        setProduct(product);
      });
  }, [params.productId]);
  return (
    <>
      <div className="product bg-white ">
        <div className="container">
          <span className="text-start d-flex flex-start">
            Home / {product.title}
          </span>
          <div className="row">
            <div className="col-7">
              <img src={product.image} alt="product_image" />
            </div>
            <div className="col-5">
              <div className="card text-start p-3 bg-white">
                <h3 className="mb-4">{product.title}</h3>
                <h4 className="mb-4">EGP {product.price}</h4>
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
                <span>Color: {product.color}</span>
                <div className="size-guid d-flex align-items-center mb-4">
                  <span class="material-symbols-outlined">checkroom</span>
                  <a href="/#">Size Guid</a>
                </div>
                <div className="numberOfItems mb-4 d-flex align-items-center justify-content-between p-1">
                  <div className="remove d-flex align-items-center ms-1">
                    <span class="material-symbols-outlined icon remove">
                      remove
                    </span>
                  </div>
                  <div className="quantity d-flex align-items-center">1</div>
                  <div className="add d-flex align-items-center me-1">
                    <span class="material-symbols-outlined icon add">add</span>
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
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
