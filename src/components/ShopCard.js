import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShopCard = ({ facility }) => {
  return (
    <>
      {facility && (
        <Col className="facilityCardContainer">
          <Row className="facilityCardImageContainer">
            <Col
              className="facilityCardImage"
              style={{
                backgroundImage: `url(${
                  facility.image ? facility.image : "./images/2.jpg"
                })`,
              }}
            >
              {" "}
              <div className="imageTag">
                <h6>{facility.customerGender}</h6>
              </div>
            </Col>
          </Row>

          <Row>
            <div>
              <h5>{facility.name}</h5>
            </div>
            <hr className="facilityCardHr" />
            <Row>
              <Col xs={6}>
                <h6>{facility.location}</h6>
              </Col>
              <Col xs={6}>
                <h6>{facility.distance ? facility.distance : "1 کیلومتر"}</h6>
              </Col>
            </Row>

            <Row className="mb-2">
              <Col xs={6}>
                <Link to={"/"} className="facilityCardButton">
                  <button className="btn">رزرو نوبت</button>
                </Link>
              </Col>
              <Col xs={6}>
                <Link
                  to={`/barberShop/${facility._id}`}
                  className="facilityCardButton"
                >
                  <button className="btn">اطلاعات بیشتر</button>
                </Link>
              </Col>
            </Row>
          </Row>
        </Col>
      )}
    </>
  );
};

export default ShopCard;
