import { Row, Col, Image, Button, Container } from "react-bootstrap";
import MenCate from "../images/men/category_banner-men_e89f0d69-c645-44b0-ac35-9d5f179c60fb_408x.progressive.webp";
import WomenCate from "../images/women/category_banner-women_77e5b2da-8bd2-4a67-96cc-673c44aa17fa_370x.progressive.webp";
import "../css/OurCategories.css";
import { Link } from "react-router-dom";

const OurCategories = () => {
  return (
    <>
      <div className="our-cateigories pt-4 pb-4">
        <h3 className="mb-4 cate-heading">OurCategories</h3>
        <Container>
          <Row className="d-flex align-items-center justify-content-center g-2">
            <Col sm={6} md={6} lg={6} className="cate-col position-relative">
              <Image src={MenCate} alt="..." className="cate-image img-fluid" />
              <Link
                to={"/men"}
                className="text-uppercse position-absolute cate-button btn btn-danger"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50% , -50%)",
                }}
              >
                shop now
              </Link>
            </Col>
            <Col sm={6} md={6} lg={6} className="cate-col position-relative">
              <Image
                src={WomenCate}
                alt="..."
                className="cate-image img-fluid"
              />
              <Link
                to={"/women"}
                className="text-uppercse position-absolute cate-button btn btn-danger"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50% , -50%)",
                }}
              >
                shop now
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurCategories;
