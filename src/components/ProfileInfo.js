import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppointmentHistroty from "./AppointmentHistory";
import { useDispatch } from "react-redux";
import { getUserDetail } from "../actions/userActions";
import Loader from "../components/Loader";
let image = "./images/profile.jpg";

const ProfileInfo = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { userInfo } = userLogin;

  const userDetail = useSelector((state) => {
    return state.userDetail;
  });
  const { loading: userLoading, user } = userDetail;

  useEffect(() => {
    if (userInfo) {
      if (userLoading === undefined) {
        dispatch(getUserDetail(userInfo));
      }
    }
  }, [userInfo, user, dispatch, userLoading]);

  return (
    <Row>
      <Col className="defaultContainer" lg={4}>
        {user ? (
          <Col>
            <Row className="profileImageContainer mb-4">
              <Image src={image} className="profileImage" />
            </Row>
            <hr />
            <Col className="profileUserDataContainer">
              <Row className="profileInfoRow">
                <Col>
                  <h6 className="profileInfoKey">
                    <strong> نام :</strong> &nbsp;{user.name}
                  </h6>
                </Col>
              </Row>
              <Row className="profileInfoRow">
                <Col>
                  <h6 className="profileInfoKey">
                    <strong> نام کاربری :</strong> &nbsp;{user.username}
                  </h6>
                </Col>
              </Row>
              <Row className="profileInfoRow">
                <Col>
                  <h6 className="profileInfoKey">
                    <strong> موبایل :</strong> &nbsp;{user.mobile}
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
        ) : (
          <Loader />
        )}
      </Col>
      <Col lg={8} className="px-2">
        <AppointmentHistroty />
      </Col>
    </Row>
  );
};

export default ProfileInfo;
