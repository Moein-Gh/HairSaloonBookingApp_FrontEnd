import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import BarberCard from "./BarberCard";
import { Row } from "react-bootstrap";
import { Pagination } from "swiper";

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

export default function BarberSlider() {
  return (
    <>
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
            {barbers.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <BarberCard barber={item} key={item.id} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </Row>
    </>
  );
}
