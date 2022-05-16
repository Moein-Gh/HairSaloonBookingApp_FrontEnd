import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import Loader from "./Loader";
import { Row } from "react-bootstrap";
import { Pagination } from "swiper";
import ManagerBarberCard from "./ManagerBarberCard";
import { useDispatch, useSelector } from "react-redux";
import { getFacilitysEmployees } from "../actions/facilityActions";
import { REMOVE_BARBER_RESET } from "../constants/userConstants";

let barbers = [
  {
    name: "سام راد",
    image: "./images/barber-1.jpg",
    id: 1,
  },
  {
    name: "سام راد",
    image: "./images/barber-2.jpg",
    id: 2,
  },
  {
    name: "سام راد",
    image: "./images/barber-3.jpg",
    id: 3,
  },
  {
    name: "سام راد",
    image: "./images/barber-4.jpg",
    id: 4,
  },
  {
    name: "سام راد",
    image: "./images/barber-5.jpg",
    id: 5,
  },
  {
    name: "سام راد",
    image: "./images/barber-6.jpg",
    id: 6,
  },
  {
    name: "سام راد",
    image: "./images/barber-7.jpg",
    id: 7,
  },
];

export default function ManagerBarberSlider() {
  const dispatch = useDispatch();
  const facilityEmployees = useSelector((state) => {
    return state.facilityEmployees;
  });
  const { loading, error, employees } = facilityEmployees;

  const removeBarberState = useSelector((state) => {
    return state.removeBarber;
  });
  const {
    loading: removeBarberLoading,
    error: removeBarberError,
    message: removeBarberMessage,
    reset: removeBarberReset,
  } = removeBarberState;

  useEffect(() => {
    console.log("text");
    dispatch(getFacilitysEmployees());
  }, [dispatch, removeBarberReset]);
  return (
    <>
      {!loading ? (
        employees.length ? (
          <Row className=" mt-3 text-align-center">
            <Row className="cardSliderContainer">
              <Swiper
                slidesPerView={2}
                spaceBetween={40}
                //   autoplay={{
                //     delay: 5000,
                //     disableOnInteraction: true,
                //   }}
                breakpoints={{
                  1200: {
                    slidesPerView: 6,
                  },
                  1000: {
                    slidesPerView: 5,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  540: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  400: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
                pagination={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {employees.map((employee) => {
                  return (
                    <SwiperSlide key={employee._id}>
                      <ManagerBarberCard barber={employee} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Row>
          </Row>
        ) : (
          <h4>آرایشگری برای نمایش وجود ندارد</h4>
        )
      ) : (
        <Loader />
      )}
    </>
  );
}
