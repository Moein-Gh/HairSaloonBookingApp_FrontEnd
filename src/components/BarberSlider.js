import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import BarberCard from "./BarberCard";
import { Row } from "react-bootstrap";
import { Pagination } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFacilitysBarbers } from "../actions/facilityActions";

export default function BarberSlider() {
  const facilityBarbers = useSelector((state) => {
    return state.facilityBarbers;
  });
  const {
    loading: facilityBarbersLoading,
    error: facilityBarbersError,
    barbers,
  } = facilityBarbers;
  let dispatch = useDispatch();
  let { facilityId } = useParams("facilityId");

  useEffect(() => {
    dispatch(getFacilitysBarbers(facilityId));
  }, [dispatch, facilityId]);

  return (
    <>
      {barbers && (
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
              {barbers.length != 0 ? (
                barbers.map((item) => {
                  return (
                    <SwiperSlide key={item._id}>
                      <BarberCard barber={item} key={item.id} />
                    </SwiperSlide>
                  );
                })
              ) : (
                <h4>آرایشگری برای نمایش وجود ندارد</h4>
              )}
            </Swiper>
          </Row>
        </Row>
      )}
    </>
  );
}
