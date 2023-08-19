import React from "react";
import "../css/Footer.css";

const FooterLinksMobile = () => {
  return (
    <>
      <div className="text-center mobile-footer">
        <h6 className="text-uppercase">NEWSLETTER SUBSCRIPTION</h6>
        <p>
          Sign up for Khotwh updates to receive information about new arrivals,
          future discounts and specials.
        </p>
        <form className="">
          <div className="w-100">
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="w-100 mt-2">
            <button
              type="submit"
              className="btn btn-danger mb-4 w-100 text-uppercase"
            >
              Subscribe!
            </button>
          </div>
        </form>
      </div>
      <div class=" FooterLinksMobile position-relative">
        <nav class="navbar">
          <button
            class="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#shop"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="shop">shop</div>
          </button>
        </nav>
        <div class="collapse" id="shop">
          <div class=" p-2">
            <ul className="list-unstyled text-center">
              <li>
                <a href="/#" alt="...">
                  Sale
                </a>
              </li>
              <li>
                <a href="/#" alt="...">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="/#" alt="...">
                  Women
                </a>
              </li>
              <li>
                <a href="/#" alt="...">
                  Men
                </a>
              </li>
              <li>
                <a href="/#" alt="...">
                  Uniform By Khotwh
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class=" FooterLinksMobile position-relative">
        <nav class="navbar">
          <button
            class="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#info"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="shop">information</div>
          </button>
        </nav>
        <div class="collapse" id="info">
          <div class=" p-2">
            <ul className="list-unstyled text-center">
              <li>
                <a href="/#" alt="...">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#" alt="...">
                  Our Stores
                </a>
              </li>
              <li>
                <a href="/#" alt="...">
                  COntact US
                </a>
              </li>
              <li>
                <a href="/#" alt="...">
                  Return or Exchange Order
                </a>
              </li>
              <li>
                <a href="/#" alt="...">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/#" alt="...">
                  Refund policy
                </a>
              </li>
              <li>
                <a href="/#" alt="...">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class=" FooterLinksMobile position-relative text-center">
          <nav class="navbar">
            <button
              class="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#Policies"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="shop">Policies</div>
            </button>
          </nav>
          <div class="collapse" id="Policies">
            <div class=" p-2">
              <ul className="list-unstyled text-center">
                <li>
                  <a href="/#" alt="...">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/#" alt="...">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/#" alt="...">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="/#" alt="...">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="/#" alt="...">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLinksMobile;
