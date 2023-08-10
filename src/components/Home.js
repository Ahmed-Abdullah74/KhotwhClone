import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";
import { openSidebar } from "../rtk/slices/sideBarSlice";
import Slider from "./Slider";
import OurCategories from "./OurCategories";
import Offers from "./Offers";
import Carousel from "./Carousel";
import SectionHeading from "./SectionHeading";
import MenProducts from "./MenProducts";

function Home() {
  return (
    <>
      <Slider />
      <Container>
        <OurCategories />
        <Offers />
        <Carousel title={"new arrivals"} />
      </Container>
      <SectionHeading title={"men"} />
      <Container>
        <MenProducts />
      </Container>
      <SectionHeading title={"women"} />
      <Container>
        <MenProducts />
        <Carousel title={"best sellers"} />
      </Container>
    </>
  );
}

export default Home;
