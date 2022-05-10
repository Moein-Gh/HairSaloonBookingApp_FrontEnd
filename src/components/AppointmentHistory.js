import React from "react";
import { Col, Row } from "react-bootstrap";
import Appointment from "./Appointment";
import { Link } from "react-router-dom";

const appointments = [
  {
    key: 1,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    barberName: "فراز محمدی",
    cost: 50000,
  },
  {
    key: 2,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    barberName: "فراز محمدی",
    cost: 50000,
  },
  {
    key: 3,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    barberName: "فراز محمدی",
    cost: 50000,
  },
];

const AppointmentHistory = () => {
  return (
    <>
      <Col className="defaultContainer h-100">
        <div className="flex-center position-relative">
          <h4 className="">نوبت های قبلی</h4>
          <Link to={"/allAppointments"} className="topLeftAbsoluteButton">
            <button className="btn">مشاهده همه</button>
          </Link>
        </div>
        <hr />
        <Col>
          {appointments.map((appointment) => {
            return (
              <Appointment appointment={appointment} key={appointment.key} />
            );
          })}
        </Col>
      </Col>
    </>
  );
};

export default AppointmentHistory;
