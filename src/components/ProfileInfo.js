import React from "react";
import { Image } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppointmentHistroty from "./AppointmentHistory";
let image = "./images/profile.jpg";
let name = "هانیه قربانعلی";
const ProfileInfo = () => {
  return (
    <Row>
      <Col className="defaultContainer" lg={4}>
        <Col>
          <Row className="profileImageContainer mb-4">
            <Image src={image} className="profileImage" />
          </Row>
          <hr />
          <Col className="profileUserDataContainer">
            <Row className="profileInfoRow">
              <Col>
                <h6 className="profileInfoKey">
                  <strong> نام :</strong> &nbsp;{name}
                </h6>
              </Col>
            </Row>
            <Row className="profileInfoRow">
              <Col>
                <h6 className="profileInfoKey">
                  <strong> نام :</strong> &nbsp;{name}
                </h6>
              </Col>
            </Row>
            <Row className="profileInfoRow">
              <Col>
                <h6 className="profileInfoKey">
                  <strong> نام :</strong> &nbsp;{name}
                </h6>
              </Col>
            </Row>
            <Row className="profileInfoRow">
              <Col>
                <h6 className="profileInfoKey">
                  <strong> نام :</strong> &nbsp;{name}
                </h6>
              </Col>
            </Row>
          </Col>
          <Row className="mt-2">
            <Col xs={6} className="text-align-center">
              <Link to={"/"} className="profileUserDataButton">
                <button className="btn">ویرایش اطلاعات</button>
              </Link>
            </Col>
            <Col xs={6} className="text-align-center">
              <Link to={"/"} className="profileUserDataButton">
                <button className="btn">تغییر رمز عبور</button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Col>
      <Col lg={8} className="px-2">
        <AppointmentHistroty />
      </Col>
    </Row>
  );
};

export default ProfileInfo;
