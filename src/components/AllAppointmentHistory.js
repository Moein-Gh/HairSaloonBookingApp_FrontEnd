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
  {
    key: 4,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    barberName: "فراز محمدی",
    cost: 50000,
  },
  {
    key: 5,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    barberName: "فراز محمدی",
    cost: 50000,
  },
  {
    key: 6,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    barberName: "فراز محمدی",
    cost: 50000,
  },
  {
    key: 7,
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
    key: 8,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    barberName: "فراز محمدی",
    cost: 50000,
  },
  {
    key: 9,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    barberName: "فراز محمدی",
    cost: 50000,
  },
  {
    key: 10,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    barberName: "فراز محمدی",
    cost: 50000,
  },
  {
    key: 11,
    date: "1400/02/01",
    hour: "7:00",
    facilityName: "سام راد",
    barberName: "فراز محمدی",
    cost: 50000,
  },
];

const AllAppointmentHistory = () => {
  return (
    <>
      <Col className="defaultContainer h-100">
        <div className="flex-center position-relative">
          <h4 className="">همه نوبت ها</h4>
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

export default AllAppointmentHistory;
