import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NewAppointment from "../components/NewAppointment";
const NewAppointmentScreen = () => {
  let navigate = useNavigate();

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) navigate("/login");
  }, [userInfo]);
  return (
    <>
      <NewAppointment />
    </>
  );
};

export default NewAppointmentScreen;
