import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

let headerHeight;
setTimeout(() => {
  headerHeight = document.querySelector("header").clientHeight;
}, 100);
const scrollWidthOffset = (el, height) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -(height + 10);
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const BarberCard = ({ barber }) => {
  let image = barber.image;
  return (
    <Col className="barberCardContainer">
      <Row className="barberCardImageContainer">
        <Col className="barberCardImage">
          <Image src={image} className="barberImage" />
        </Col>
      </Row>

      <Row>
        <div>
          <h5>{barber.name}</h5>
        </div>
        <hr className="barberCardHr" />

        <Row className="mb-2">
          <Col>
            <HashLink
              smooth
              scroll={(el) => {
                scrollWidthOffset(el, headerHeight);
              }}
              to={"/barbershop#services"}
              className="barberCardButton"
            >
              <button className="btn">مشاهده خدمات</button>
            </HashLink>
          </Col>
        </Row>
      </Row>
    </Col>
  );
};

export default BarberCard;
