import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { Button, Image } from "react-bootstrap";
import { addToCart } from "../rtk/slices/cart-slice";
import newArrivals from "../Data/newArrivalsData.json";
import "../css/carousel.css";

function Carousel(props) {
  const dispatch = useDispatch();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          slideWidth: 250,
          slideSpacing: 50,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          slideWidth: 250,
          slideSpacing: 50,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          slideWidth: 230,
          slideSpacing: 50,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          slidesWidth: 160,
          slidesSpacing: 50,
          dots: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          slidesWidth: 160,
          slidesSpacing: 50,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="new mb-5">
      <h1 className="title text-uppercase">{props.title}</h1>

      <Slider {...settings}>
        {newArrivals.map((item) => (
          <div className="item-card mb-4 " key={item.id}>
            <div className="item-image d-flex justify-content-center">
              <Image src={item.image} alt={"..."} className="img-fluid" />
            </div>
            <div className="item-card-body">
              <p
                style={{
                  marginBottom: "2px",
                  fontSize: "14px",
                  color: "#233c50",
                }}
              >
                {item.title}
              </p>
              <p style={{ fontSize: "18px", color: "#233c50" }}>
                EGP {item.price}
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
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
