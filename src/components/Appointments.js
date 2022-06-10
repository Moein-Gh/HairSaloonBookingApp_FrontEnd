import React from "react";
import { Col, Row } from "react-bootstrap";
import AppointmentHistory from "./AppointmentHistory";
import TodaysAppointments from "./TodaysAppointments";
import NewAppointment from "./NewAppointment";

const Appointments = () => {
  return (
    <>
      <Row>
        <Col lg={12} className="appointmentRightContainer">
          <TodaysAppointments />
        </Col>
      </Row>
    </>
  );
};

export default Appointments;
