import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBarberAppointments } from "../actions/appointmentActions";
import AllAppointmentHistory from "../components/AllAppointmentHistory";

const AllAppointmentsForBarber = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { userInfo } = userLogin;

  const appointmentBarberList = useSelector((state) => {
    return state.appointmentBarberList;
  });
  let { appointments: barberAppointments } = appointmentBarberList;
  useEffect(() => {
    if (!userInfo) navigate("/login");

    dispatch(getBarberAppointments("myId"));
  }, [userInfo, dispatch, navigate]);

  return (
    <>
      <Row key={barberAppointments}>
        <AllAppointmentHistory appointments={barberAppointments} />
      </Row>
    </>
  );
};

export default AllAppointmentsForBarber;
