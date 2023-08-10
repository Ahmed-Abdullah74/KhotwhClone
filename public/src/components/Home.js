import { Container } from "react-bootstrap";

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
