import React from "react";
import Header from "../../components/Header/Header";
import MyImageCarousel from "../../components/CarouselShop/CarouselShop.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SocialBar from "../../components/SocialBar/SocialBar.jsx";

function Contact() {
  return (
    <div>
      <Header></Header>
      <MyImageCarousel></MyImageCarousel>

      <Container>
        <Row style={{ marginTop: "5rem" }}>
          <Col sm={8}>
            <h5 className="text-uppercase">INDIRIZZO</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <h6 className="text-black">
                  Via Amerigo Vespucci 14 - Torino - 10139 - Italy
                </h6>
              </li>
            </ul>
          </Col>
          <Col sm={4}>
            <SocialBar></SocialBar>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <h5 className="text-uppercase">Telefono</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <h6 className="text-black">234456788997</h6>
              </li>
            </ul>
          </Col>
          <Col sm>
            <h5 className="text-uppercase">E-MAIL</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-black">
                  mailshop@gmail.com
                </a>
              </li>
            </ul>
          </Col>
          <Col sm>
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-black">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="text-black">
                  Link 2
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
