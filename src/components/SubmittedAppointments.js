import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsersSubmittedAppointments } from "../actions/appointmentActions";
import Appointment from "./Appointment";

const AppointmentHistory = () => {
  const dispatch = useDispatch();

  const appointmentSubmittedList = useSelector((state) => {
    return state.appointmentSubmittedList;
  });
  const {
    loading,
    error,
    appointments: submittedAppointments,
  } = appointmentSubmittedList;

  useEffect(() => {
    dispatch(getUsersSubmittedAppointments());
  }, [dispatch]);
  return (
    <>
      <Col className="defaultContainer h-100">
        <div className="flex-center position-relative">
          <h4 className="">نوبت های در انتظار تایید</h4>
        </div>
        <hr />
        {submittedAppointments && submittedAppointments.length > 0 ? (
          <Col>
            {submittedAppointments.map((appointment) => {
              return (
                <Appointment appointment={appointment} key={appointment._id} />
              );
            })}
          </Col>
        ) : (
          <h5>نوبتی در انتطار تایید نیست</h5>
        )}
      </Col>
    </>
  );
};

export default AppointmentHistory;
