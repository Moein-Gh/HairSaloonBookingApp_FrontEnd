import React from "react";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
let image = "./images/profile.jpg";
let name = "سام راد";
const BarberShopScreen = () => {
  return (
    <>
      <Row className="defaultContainer">
        <Row className="barberShopHeroContainer">
          <Col>
            <Row>
              <Col xs={8} className="barberShopImageContainer">
                <div>
                  <h4>{name}</h4>
                </div>
              </Col>
              <Col xs={4} className="barberShopImageContainer">
                <Image src={image} className="barberShopImage" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>

      <Row className="defaultContainer mt-3">
        <BarberShopServices />
      </Row>
    </>
  );
};

export default BarberShopScreen;
