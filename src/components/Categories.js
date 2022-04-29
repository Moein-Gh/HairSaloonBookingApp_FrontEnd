import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const categoryItems = [
  { key: 1, icon: "/icons/men.png", title: "مخصوص آقایان", link: "/men" },
  { key: 2, icon: "/icons/women.png", title: "مخصوص بانوان", link: "/women" },
  {
    key: 3,
    icon: "/icons/location.png",
    title: "نزدیک ترین",
    link: "/nearest",
  },
  { key: 4, icon: "/icons/hairdryer.png", title: "حالت دهی", link: "/styling" },
  { key: 5, icon: "/icons/nail.png", title: "ناخن", link: "/nail" },
];

const Categories = () => {
  return (
    <>
      <Row className="defaultContainer mt-3">
        <Col lg={2} className="categoryTextContainer">
          <h2 className="categoryText">دسته بندی آرایشگاه ها</h2>
        </Col>
        {categoryItems.map((item) => {
          return (
            <Col className="categoryItem flex-center" key={item.key}>
              <Link to={item.link}>
                <Row className="categoryImageContainer">
                  <Image src={item.icon} />
                </Row>
              </Link>
              <h4 className="categoryTitle">{item.title}</h4>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Categories;
