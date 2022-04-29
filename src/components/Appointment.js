import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Appointment = ({ appointment }) => {
  return (
    <>
      <Row className="appointmentCard">
        <Col lg={5}>
          <h6>آرایشگاه: {appointment.facilityName}</h6>
          <h6>آرایشگر: {appointment.barberName}</h6>
        </Col>
        <Col lg={5}>
          <h6>تاریخ: {appointment.date}</h6>
          <h6>مبلغ: {appointment.cost}</h6>
        </Col>
        <Col lg={2}>
          <Link to={"/"}>
            <button className="btn refreshButton">
              <Image src={"/icons/refresh.png"}></Image>
            </button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Appointment;
