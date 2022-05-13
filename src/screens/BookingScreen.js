import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BookingScreen = () => {
  let navigate = useNavigate();

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) navigate("/login");
  }, [userInfo]);
  return <div>BookingScreen</div>;
};

export default BookingScreen;
