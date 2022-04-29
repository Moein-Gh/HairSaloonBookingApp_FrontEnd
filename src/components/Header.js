import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <>
      <header>
        <Row className="headerContainer">
          <Col xs={2} className="flex-center text-align-center">
            <SideBar />
          </Col>
          <Col xs={8} className="flex-center headerMiddle text-align-center">
            <h1>سینوا</h1>
          </Col>
          <Col xs={2} className="flex-center text-align-center">
            <Link to={"/"}>
              <Image src="/icons/logo.png" className="logo" />
            </Link>
          </Col>
        </Row>
      </header>
    </>
  );
};

export default Header;
