import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
let image = "./images/profile.jpg";
let name = "هانیه قربانعلی";
const Profile = ({ setShow }) => {
  return (
    <Col>
      <Row className="defaultContainer menuProfileContainer">
        <Col xs={3} className="profileImageContainer">
          <Image src={image} className="menuProfileImage" />
        </Col>
        <Col xs={9} className="profileInfoContainer flex-center">
          <div>
            <h6>{name} خوش آمدید</h6>
            <Link
              to={"/UserprofileScreen"}
              onClick={() => {
                setShow(false);
              }}
            >
              <button className="btn mt-3 mx-1">مشاهده پروفایل</button>
            </Link>
            <Link
              to={"/"}
              onClick={() => {
                setShow(false);
              }}
            >
              <button className="btn mt-3 mx-1">خروج</button>
            </Link>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default Profile;
