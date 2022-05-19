import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardSlider from "../components/CardSlider";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import MenFacilitiesSlider from "../components/MenFacilitiesSlider";
import WomenFacilitiesSlider from "../components/WomenFacilitiesSlider";
import NearestFacilitiesSlider from "../components/NearestFacilitiesSlider";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { getUserDetail } from "../actions/userActions";

const HomeScreen = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) navigate("/login");
    else {
      dispatch(getUserDetail(userInfo._id));
    }
  }, [userInfo]);

  return (
    <>
      {userInfo ? (
        <>
          <Hero />
          <Categories />
          <MenFacilitiesSlider />
          <WomenFacilitiesSlider />
          <NearestFacilitiesSlider />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomeScreen;
