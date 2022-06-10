import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import {
  approveAppointment,
  getAppointmentDetail,
  getAppointmentsBarbers,
  rejectAppointment,
} from "../actions/appointmentActions";
import BarberServicesTab from "../components/BarberServicesTab";
import BarberShopTab from "../components/BarberShopTab";
import Loader from "../components/Loader";

const AppointmentScreen = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let { appointmentId } = useParams("appointmentId");

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { loading, error, userInfo } = userLogin;

  const backUrl = useSelector((state) => {
    return state.backUrl;
  });
  const { url } = backUrl;

  const editAppointmentApprove = useSelector((state) => {
    return state.editAppointmentApprove;
  });
  const {
    loading: approveLoading,
    error: approveError,
    message: approveMessage,
    reset: approveReset,
  } = editAppointmentApprove;

  const editAppointmentReject = useSelector((state) => {
    return state.editAppointmentReject;
  });
  const {
    loading: rejectLoading,
    error: rejectError,
    message: rejectMessage,
    reset: rejectReset,
  } = editAppointmentReject;

  const appointmentDetail = useSelector((state) => {
    return state.appointmentDetail;
  });
  const {
    loading: appointmentDetailLoading,
    error: appointmentDetailError,
    appointment,
  } = appointmentDetail;

  const getPriceSum = (services) => {
    let sum = 0;
    services.forEach((service) => {
      sum = sum + service.price;
    });
    return sum;
  };

  const getDurationSum = (services) => {
    let sum = 0;
    services.forEach((service) => {
      sum = sum + service.time;
    });
    if (sum % 15 !== 0) {
      sum = sum + (15 - (sum % 15));
    }
    return sum;
  };

  useEffect(() => {
    if (!userInfo) navigate("/login");
    else {
      dispatch(getAppointmentDetail(appointmentId));
    }
  }, [userInfo, appointmentId, approveReset, rejectReset]);

  return (
    <>
      <Row className="defaultContainer">
        <Row className="barberShopHeroContainer">
          <Col>
            {appointmentDetailLoading ? (
              <Loader />
            ) : appointment ? (
              <Row>
                <Col xs={12} className="barberShopImageContainer">
                  <div>
                    <h4>
                      {appointment.facility && appointment.facility.name
                        ? appointment.facility.name
                        : "نا مشخص"}
                    </h4>
                    <h4>
                      {appointment.user && appointment.user.name
                        ? appointment.user.name
                        : "نا مشخص"}
                    </h4>
                    <h4>
                      {appointment.barber && appointment.barber.name
                        ? appointment.barber.name
                        : "نا مشخص"}
                    </h4>
                    <h4>
                      {appointment.startTime
                        ? appointment.startTime
                        : "نا مشخص"}
                    </h4>
                    <h4>
                      {appointment.endTime ? appointment.endTime : "نا مشخص"}
                    </h4>
                    <h4>
                      {appointment.status
                        ? appointment.status === "submitted"
                          ? "در انتطار بررسی"
                          : appointment.status === "approved"
                          ? "تایید شده"
                          : appointment.status === "rejected"
                          ? "رد شده"
                          : "نا مشخص"
                        : "نا مشخص"}
                    </h4>
                  </div>
                </Col>
                <Col>
                  {appointment.services && appointment.services.length !== 0 && (
                    <Row className="defaultContainer">
                      <Col>
                        <Row>
                          <Col xs={8}>
                            <h5>خدمات انتخاب شده</h5>
                            {appointment.services.map((service) => {
                              return (
                                <h6 key={Math.random()}>{service.title}</h6>
                              );
                            })}
                          </Col>
                          <Col xs={2}>
                            <h5>مدت زمان</h5>
                            {appointment.services.map((service) => {
                              return (
                                <h6 key={Math.random()}>
                                  {service.time} دقیقه
                                </h6>
                              );
                            })}
                          </Col>
                          <Col xs={2}>
                            <h5>مبلغ</h5>
                            {appointment.services.map((service) => {
                              return (
                                <h6 key={Math.random()}>
                                  {service.price.toLocaleString()} تومان
                                </h6>
                              );
                            })}
                          </Col>
                        </Row>
                        <hr />
                        <Row>
                          <Col xs={8}>
                            <h5>مجموع</h5>
                          </Col>
                          <Col xs={2}>
                            <h5>
                              {getDurationSum(appointment.services)} دقیقه
                            </h5>
                          </Col>
                          <Col xs={2}>
                            <h5>
                              {getPriceSum(
                                appointment.services
                              ).toLocaleString()}{" "}
                              تومان
                            </h5>
                          </Col>
                        </Row>
                        <br />
                      </Col>
                    </Row>
                  )}
                </Col>
                {appointment.status === "submitted" && (
                  <Row>
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          dispatch(approveAppointment(appointment._id));
                        }}
                      >
                        تایید
                      </button>
                    </div>
                    <div>
                      <button
                        className="btn"
                        onClick={() => {
                          dispatch(rejectAppointment(appointment._id));
                        }}
                      >
                        رد
                      </button>
                    </div>
                  </Row>
                )}
                <Link to={url}>
                  <button className="btn">بازگشت</button>
                </Link>
              </Row>
            ) : (
              <h6>اطلاعاتی برای نمایش وجود ندارد</h6>
            )}
          </Col>
        </Row>
      </Row>
    </>
  );
};

export default AppointmentScreen;
