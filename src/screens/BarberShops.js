import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ShopCard from "../components/ShopCard";
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

let barberShopCategories = [
  { english: "men", persian: "مخصوص آقایان" },
  { english: "women", persian: "مخصوص بانوان" },
  { english: "styling", persian: "حالت دهی" },
  { english: "nail", persian: "ناخن" },
  { english: "nearest", persian: "نزدیک ترین" },
];

const BarberShops = () => {
  let { category } = useParams();
  let navigate = useNavigate();

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) navigate("/login");
  }, [userInfo]);
  return (
    <Row className="defaultContainer">
      <Row className="barbershopTitle">
        <h4>
          {
            barberShopCategories.filter((item) => {
              return category === item.english;
            })[0].persian
          }
        </h4>
      </Row>
      <hr />
      <div className="shopCardGrid">
        {shops.map((shop) => {
          return <ShopCard key={Math.random()} shop={shop} />;
        })}
      </div>
    </Row>
  );
};

export default BarberShops;
