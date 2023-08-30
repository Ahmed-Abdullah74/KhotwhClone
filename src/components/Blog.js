import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import BlogData from "./BlogData";
const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  dots: true,
  autoplay: true,

  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
};

function Blog() {
  return (
    <>
      <div className="NewArrivals pt-5 pb-5 ">
        <div className="NewArrivals-heading text-center mb-3">
          <h3 className="">Blog</h3>
        </div>
        <OwlCarousel
          className="owl-theme "
          {...options}
          width
          slideBy={2}
          autoplay
          loop
        >
          {BlogData.map((product) => (
            <div className="blog text-center mb-5" key={product.id}>
              <img src={product.image} alt="..." className="mb-2" />
              <h6 className="newproduct-title">{product.title}</h6>
              <p className="newproduct-price">{product.description}</p>
              <div className="add-to-cart d-flex align-items-center justify-content-center">
                <button className="btn btn-danger me-3 text-uppercase">
                  <span className="cart-text"> read & shop</span>
                </button>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
}

export default Blog;
