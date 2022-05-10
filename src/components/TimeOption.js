import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

const TimeOption = ({ time }) => {
  return (
    <Row className="timeOptionContainer">
      <Col>
        <h5>{time.day}</h5>
        <h6>{time.startClock}</h6>
        <h6>{time.endClock}</h6>
      </Col>
    </Row>
  );
};

export default TimeOption;
