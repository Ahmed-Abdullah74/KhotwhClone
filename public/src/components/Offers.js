import { Row, Col, Image, Container } from "react-bootstrap";
import Offer1 from "../images/offer-1.webp";
import Offer2 from "../images/offer-2.webp";
import Offer3 from "../images/offer-3.webp";
import "../css/Offer.css";

const Offers = () => {
  return (
    <>
      <div className="offers pt-4 pb-4 mb-5">
        <Container>
          <Row className="g-2 d-flex align-items-center justify-content-center">
            <Col sm={6} md={4} lg={4} className="offer">
              <Image
                src={Offer1}
                alt="offer"
                className="img-fluid offer-image"
              />
            </Col>
            <Col sm={6} md={4} lg={4} className="offer">
              <Image
                src={Offer2}
                alt="offer"
                className="img-fluid offer-image"
              />
            </Col>
            <Col sm={6} md={4} lg={4} className="offer offer-3 ">
              <Image
                src={Offer3}
                alt="offer"
                className="img-fluid offer-image"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Offers;
