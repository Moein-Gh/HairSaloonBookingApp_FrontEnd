import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Appointment = ({ appointment, repeatAppointmentButton }) => {
  return (
    <>
      <Row className="appointmentCard">
        <Col lg={5} className="appointmentTextContainer">
          <div>
            <h6>آرایشگاه: {appointment.facilityName}</h6>
          </div>
          <div>
            <h6>آرایشگر: {appointment.barberName}</h6>
          </div>
        </Col>
        <Col lg={5} className="appointmentTextContainer">
          <div>
            <h6>تاریخ: {appointment.date}</h6>
          </div>
          <div>
            <h6>مبلغ: {appointment.cost}</h6>
          </div>
        </Col>
        <Col lg={2} className="appointmentButtonContainer">
          {repeatAppointmentButton && (
            <Link to={"/"}>
              <button className="btn">تکرار نوبت</button>
            </Link>
          )}
          <Link to={"/"}>
            <button className="btn ">اطلاعات بیشتر</button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Appointment;
