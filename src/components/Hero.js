import React from "react";
import { Col, Row } from "react-bootstrap";
import AdvanceSearch from "./AdvanceSearch";
import MainCarousel from "./MainCarousel";

const Hero = () => {
  return (
    <>
      <Row className="defaultContainer">
        <Col lg={8}>
          <MainCarousel />
        </Col>
        <Col lg={4} className="">
          <AdvanceSearch />
        </Col>
      </Row>
    </>
  );
};

export default Hero;
