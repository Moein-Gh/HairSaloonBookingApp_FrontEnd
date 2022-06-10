import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../actions/userActions";
import Loader from "../components/Loader";
import AppointmentHistroty from "./AppointmentHistory";
let image =
  "https://nyheadshots.com/wp-content/uploads/2018/07/headshots-800x536.jpg";

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
      <Col className="defaultContainer" lg={3} md={3} sm={12}>
        {user ? (
          <Col>
            <Row>
              <Col md={12} sm={6}>
                <Row className="profileImageContainer ">
                  <Image src={image} className="profileImage" />
                </Row>
              </Col>
              {/* <hr /> */}

              <Col md={12} sm={6} className="profileUserDataContainer">
                <Row className="profileInfoRow">
                  <Col>
                    <h6 className="profileInfoKey"> نام</h6> &nbsp;
                  </Col>
                  <Col>
                    <div className="profileInfoValue">{user.name}</div>
                  </Col>
                </Row>
                <Row className="profileInfoRow">
                  <Col>
                    <h6 className="profileInfoKey"> نام کاربری</h6> &nbsp;
                  </Col>
                  <Col>
                    <div className="profileInfoValue">{user.username}</div>
                  </Col>
                </Row>
                <Row className="profileInfoRow">
                  <Col>
                    <h6 className="profileInfoKey">موبایل</h6> &nbsp;
                  </Col>
                  <Col>
                    <div className="profileInfoValue">{user.mobile}</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        ) : (
          <Loader />
        )}
      </Col>
      <Col lg={9} md={9} className="appointmentHistory">
        <AppointmentHistroty />
      </Col>
    </Row>
  );
};

export default ProfileInfo;
