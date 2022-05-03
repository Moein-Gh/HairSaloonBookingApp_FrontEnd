import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import ShopCard from "./ShopCard";
import { Row } from "react-bootstrap";
import { Pagination } from "swiper";
// import 'swiper/modules'

export default function CardSlider({ items: shops, title }) {
  return (
    <>
      <Row className="defaultContainer mt-3 text-align-center">
        <div className="cardSliderTextContainer">
          <h3>{title}</h3>
        </div>
        <hr />

        <Row className="cardSliderContainer">
          <Swiper
            slidesPerView={2}
            spaceBetween={0}
            //   autoplay={{
            //     delay: 5000,
            //     disableOnInteraction: true,
            //   }}
            breakpoints={{
              1200: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              540: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 100,
              },
            }}
            pagination={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {shops.map((item) => {
              return (
                <SwiperSlide>
                  <ShopCard shop={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </Row>
    </>
  );
}
