import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";
import { path } from "../config";
let image = `https://nyheadshots.com/wp-content/uploads/2018/07/headshots-800x536.jpg`;

let name = "هانیه قربانعلی";

const MenuProfile = ({ setShow }) => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logout());
  };

  return (
    <Col>
      <Row className="defaultContainer menuProfileContainer">
        <Col xs={3} className="menuProfileImageContainer">
          <Image src={image} className="menuProfileImage" />
        </Col>
        <Col xs={9} className="menuProfileInfoContainer flex-center">
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
              to={"/login"}
              onClick={() => {
                logOutHandler();
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

export default MenuProfile;
