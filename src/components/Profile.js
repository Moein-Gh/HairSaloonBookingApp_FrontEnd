<<<<<<< HEAD
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
=======
import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
let image = './images/profile.jpg'
let name = 'هانیه قربانعلی'
const Profile = () => {
  return (
    <Col className='defaultContainer menuProfileContainer'>
      <Row>
        <Col lg={4} className='profileImageContainer'>
          <Image src={image} className='menuProfileImage' />
        </Col>
        <Col lg={8} className='profileInfoContainer flex-center'>
          <div>
            <h6>{name} خوش آمدید</h6>
            <Link to={'/UserprofileScreen'}>
              <button className='btn mt-3 mx-1'>مشاهده پروفایل</button>
            </Link>
            <Link to={'/'}>
              <button className='btn mt-3 mx-1'>خروج</button>
>>>>>>> d7289704531ca5d0c182d0f877581909bf7758d7
            </Link>
          </div>
        </Col>
      </Row>
    </Col>
  )
}

export default Profile
