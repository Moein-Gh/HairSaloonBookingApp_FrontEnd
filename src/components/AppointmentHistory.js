import React from "react";
import { Col } from "react-bootstrap";
import Appointment from "./Appointment";

const appointments = [
  {
    key: 1,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    cost: 50000,
  },
  {
    key: 2,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    cost: 50000,
  },
  {
    key: 3,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    cost: 50000,
  },
  {
    key: 4,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    cost: 50000,
  },
  {
    key: 5,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    cost: 50000,
  },
];

const AppointmentHistory = () => {
  return (
    <>
      <Col className="defaultContainer mt-3">
        <div className="flex-center">
          <h4 className="">نوبت های قبلی</h4>
        </div>
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
