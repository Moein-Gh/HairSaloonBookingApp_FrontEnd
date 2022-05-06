import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  return (
    <Row className="serviceItem">
      <Col xs={7} className="serviceTitleContainer">
        <div>
          <h6 className="serviceTitleText">{service.title}</h6>
        </div>
      </Col>
      <Col xs={2} className="serviceDurationContainer text-align-center">
        <div>
          <h6 className="serviceDurationText">{service.duration} دقیقه</h6>
        </div>
      </Col>
      <Col xs={2} className="servicePriceContainer text-align-center">
        <div>
          <h6 className="servicePriceText">
            {service.price.toLocaleString()} تومان
          </h6>
        </div>
      </Col>
      <Col xs={1}>
        <button className="btn">افزودن</button>
      </Col>
    </Row>
  );
};

export default Service;
