import React from "react";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import BarberServicesTab from "../components/BarberServicesTab";
import BarberShopTab from "../components/BarberShopTab";
let image = "./images/3.jpg";
let name = "سام راد";
let address = "یافت آباد - میدان الغدیر";
let rating = 4;
let phoneNumber = "۰۹۱۲۳۴۵۶۷۸۹";
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
                  <h4>{address}</h4>
                  <h4>{rating}/5</h4>
                  <h4>{phoneNumber}</h4>
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
        <BarberShopTab />
      </Row>
      <Row id="services" className="defaultContainer mt-3">
        <BarberServicesTab />
      </Row>
    </>
  );
};

export default BarberShopScreen;
