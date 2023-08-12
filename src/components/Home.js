import { Container } from "react-bootstrap";

import Slider from "./Slider";
import OurCategories from "./OurCategories";
import Offers from "./Offers";
import Carousel from "./Carousel";
import SectionHeading from "./SectionHeading";
import MenProducts from "./MenProducts";
import Featchers from "./Featchers";
import Blog from "./Blog";
import Footer from "./Footer";

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
      <Featchers />
      <Container>
        <Blog />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
