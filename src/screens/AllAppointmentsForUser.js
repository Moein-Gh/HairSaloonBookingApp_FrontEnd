import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserAppointments } from "../actions/appointmentActions";
import AllAppointmentHistory from "../components/AllAppointmentHistory";

const AllAppointmentsForUser = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { userInfo } = userLogin;

  const appointmentUserList = useSelector((state) => {
    return state.appointmentUserList;
  });
  let { appointments: userAppointments } = appointmentUserList;

  useEffect(() => {
    if (!userInfo) navigate("/login");

    dispatch(getUserAppointments());
  }, [userInfo, dispatch, navigate]);

  return (
    <>
      <Row key={userAppointments}>
        <AllAppointmentHistory appointments={userAppointments} />
      </Row>
    </>
  );
};

export default AllAppointmentsForUser;
