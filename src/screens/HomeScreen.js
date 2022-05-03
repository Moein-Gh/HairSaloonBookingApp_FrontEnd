import React from "react";
import CardSlider from "../components/CardSlider";
import Categories from "../components/Categories";
import Hero from "../components/Hero";
let shops = [
  {
    name: "سام راد",
    image: "./images/1.jpg",
    customerGender: "بانوان",
    location: "یافت آباد",
  },
  {
    name: "سام راد",
    image: "./images/2.jpg",
    customerGender: "آقایان",
    location: "یافت آباد",
  },
  {
    name: "سام راد",
    image: "./images/3.jpg",
    customerGender: "آقایان",
    location: "یافت آباد",
  },
  {
    name: "سام راد",
    image: "./images/1.jpg",
    customerGender: "بانوان",
    location: "یافت آباد",
  },
  {
    name: "سام راد",
    image: "./images/2.jpg",
    customerGender: "آقایان",
    location: "یافت آباد",
  },
  {
    name: "سام راد",
    image: "./images/3.jpg",
    customerGender: "آقایان",
    location: "یافت آباد",
  },
  {
    name: "سام راد",
    image: "./images/1.jpg",
    customerGender: "بانوان",
    location: "یافت آباد",
  },
];
const HomeScreen = () => {
  return (
    <>
      <Hero />
      <Categories />
      <CardSlider items={shops} title="مخصوص آقایان" />
      <CardSlider items={shops} title="مخصوص بانوان" />
      <CardSlider items={shops} title="نزدیکترین" />
    </>
  );
};

export default HomeScreen;
