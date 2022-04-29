import React from "react";
import { Col, Row } from "react-bootstrap";
import AppointmentHistory from "./AppointmentHistory";
import NewAppointment from "./NewAppointment";

const Appointments = () => {
  return (
    <>
      <Row>
        <Col lg={6}>
          <NewAppointment />
        </Col>
        <Col lg={6}>
          <AppointmentHistory />
        </Col>
      </Row>
    </>
  );
};

export default Appointments;
