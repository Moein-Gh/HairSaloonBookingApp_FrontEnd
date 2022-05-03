import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShopCard = ({ shop }) => {
  let image = shop.image;
  return (
    <Col className="shopCardContainer">
      <Row className="shopCardImageContainer">
        <div
          className="shopCardImage"
          style={{ backgroundImage: `url(${image})` }}
        >
          {" "}
          <div className="imageTag">
            <h6>{shop.customerGender}</h6>
          </div>
        </div>
      </Row>

      <Row>
        <div>
          <h5>{shop.name}</h5>
        </div>
        <hr className="shopCardHr" />
        <Row>
          <Col xs={6}>
            <h6>{shop.location}</h6>
          </Col>
          <Col xs={6}>
            <h6>{shop.distance ? shop.distance : "1 کیلومتر"}</h6>
          </Col>
        </Row>

        <Row className="mb-2">
          <Col xs={6}>
            <Link to={"/"} className="shopCardButton">
              <button className="btn">رزرو نوبت</button>
            </Link>
          </Col>
          <Col xs={6}>
            <Link to={"/"} className="shopCardButton">
              <button className="btn">اطلاعات بیشتر</button>
            </Link>
          </Col>
        </Row>
      </Row>
    </Col>
  );
};

export default ShopCard;
