import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserDetail } from "../actions/userActions";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import MenFacilitiesSlider from "../components/MenFacilitiesSlider";
import NearestFacilitiesSlider from "../components/NearestFacilitiesSlider";
import WomenFacilitiesSlider from "../components/WomenFacilitiesSlider";

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
