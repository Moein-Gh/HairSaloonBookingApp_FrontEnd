import React from "react";
import { Col, Row } from "react-bootstrap";
import Appointment from "./Appointment";
import { Link } from "react-router-dom";

const AllAppointmentHistory = ({ appointments }) => {
  return (
    <>
      <Col className="defaultContainer h-100">
        <div className="flex-center position-relative">
          <h4 className="">همه نوبت ها</h4>
        </div>
        <hr />
        <Col>
          {appointments && appointments.length > 0 ? (
            appointments.map((appointment) => {
              return (
                <Appointment appointment={appointment} key={appointment._id} />
              );
            })
          ) : (
            <h4>نوبتی برای نمایش وجود ندارد</h4>
          )}
        </Col>
      </Col>
    </>
  );
};

export default AllAppointmentHistory;
