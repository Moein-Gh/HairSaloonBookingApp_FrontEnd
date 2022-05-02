import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
let image = "./images/profile.jpg";
let name = "هانیه قربانعلی";
const Profile = () => {
  return (
    <Col>
      <Row className="defaultContainer menuProfileContainer">
        <Col lg={4} className="profileImageContainer">
          <Image src={image} className="menuProfileImage" />
        </Col>
        <Col lg={8} className="profileInfoContainer flex-center">
          <div>
            <h6>{name} خوش آمدید</h6>
            <Link to={"/UserprofileScreen"}>
              <button className="btn mt-3 mx-1">مشاهده پروفایل</button>
            </Link>
            <Link to={"/"}>
              <button className="btn mt-3 mx-1">خروج</button>
            </Link>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default Profile;
