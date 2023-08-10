import React from "react";
import Slide1 from "../images/main_sliders_-_desktop1_1349x.progressive.webp";
import Slide2 from "../images/main_sliders_-_desktop3_1366x.progressive.webp";
import Slide3 from "../images/main_sliders_-_desktop2_1349x.progressive.webp";
import Slide4 from "../images/main-sliders-desktop-women-summer2023_1349x.progressive.png.webp";

const Slider = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Slide1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Slide2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Slide3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={Slide4} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Slider;
