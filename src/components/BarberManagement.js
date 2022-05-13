import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFacilitysEmployees } from "../actions/facilityActions";
import ManagerBarberSlider from "./ManagerBarberSlider";
const BarberManagement = () => {
  return (
    <>
      <Row className="defaultContainer">
        <Row>
          <Col className="position-relative">
            <h4>آرایشگر ها</h4>
            <Link to={"/addBarber"} className="topLeftAbsoluteButton">
              <button className="btn">افزودن آرایشگر</button>
            </Link>
          </Col>
        </Row>
        <Row>
          <ManagerBarberSlider />
        </Row>
      </Row>

      <Row className="defaultContainer">
        <Row>گزارش کلی : سام راد</Row>
        <Row>report</Row>
      </Row>
    </>
  );
};

export default BarberManagement;
