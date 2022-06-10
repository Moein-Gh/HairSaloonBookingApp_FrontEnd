import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Appointment from "./Appointment";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBarbersAppointmentsForToday } from "../actions/appointmentActions";

const AppointmentHistory = () => {
  const dispatch = useDispatch();

  const appointmentTodayListForBarber = useSelector((state) => {
    return state.appointmentTodayListForBarber;
  });
  const {
    loading,
    error,
    appointments: todaysAppointments,
  } = appointmentTodayListForBarber;

  useEffect(() => {
    dispatch(getBarbersAppointmentsForToday());
  }, [dispatch]);
  return (
    <>
      <Col className="defaultContainer h-100">
        <div className="flex-center position-relative">
          <h4 className="">نوبت های امروز</h4>
          <Link to={"/allBarberAppointments"} className="topLeftAbsoluteButton">
            <button className="btn">همه نوبت ها </button>
          </Link>
        </div>
        <hr />
        {todaysAppointments ? (
          <Col>
            {todaysAppointments.map((appointment) => {
              return (
                <Appointment appointment={appointment} key={appointment._id} />
              );
            })}
          </Col>
        ) : (
          <h5>نوبتی یافت نشد</h5>
        )}
      </Col>
    </>
  );
};

export default AppointmentHistory;
