import React from "react";
import { Col, Row } from "react-bootstrap";
import Appointments from "../components/Appointments";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
import MainCarousel from "../components/MainCarousel";

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Appointments />
    </>
  );
};

export default HomeScreen;
