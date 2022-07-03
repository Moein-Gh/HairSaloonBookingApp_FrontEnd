import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  approveAppointment,
  getAppointmentDetail,
  rejectAppointment,
} from '../actions/appointmentActions';
import Loader from '../components/Loader';
import { getFromLocalStorage } from '../utils';

const AppointmentScreen = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let { appointmentId } = useParams('appointmentId');

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { userInfo } = userLogin;

  const url = getFromLocalStorage('backUrl');

  const editAppointmentApprove = useSelector((state) => {
    return state.editAppointmentApprove;
  });
  const { reset: approveReset } = editAppointmentApprove;

  const editAppointmentReject = useSelector((state) => {
    return state.editAppointmentReject;
  });
  const { reset: rejectReset } = editAppointmentReject;

  const appointmentDetail = useSelector((state) => {
    return state.appointmentDetail;
  });
  const { loading: appointmentDetailLoading, appointment } = appointmentDetail;

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
    if (!userInfo) navigate('/login');
    else {
      dispatch(getAppointmentDetail(appointmentId));
    }
  }, [dispatch, navigate, userInfo, appointmentId, approveReset, rejectReset]);

  return (
    <>
      <Row>
        <Row className="appointmentDetailContainer">
          <Col>
            {appointmentDetailLoading ? (
              <Loader />
            ) : appointment ? (
              <Row>
                <Col md={7} className="appointmentDetail">
                  <Row className={'defaultContainer'}>
                    <h5 className="sectionTitle">اطلاعات نوبت</h5>
                    <Col
                      md={6}
                      style={{ borderLeft: '.5px solid lightgrey' }}
                      className={'appointmentDetailColumn'}
                    >
                      <Col>
                        <Row className="profileInfoRow">
                          <Col>
                            <h6 className="profileInfoKey"> نام آرایشگاه</h6> &nbsp;
                          </Col>
                          <Col>
                            <div className="profileInfoValue">
                              {appointment.facility && appointment.facility.name
                                ? appointment.facility.name
                                : 'نا مشخص'}
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row className="profileInfoRow">
                          <Col>
                            <h6 className="profileInfoKey"> نام نوبت گیرنده</h6> &nbsp;
                          </Col>
                          <Col>
                            <div className="profileInfoValue">
                              {appointment.user && appointment.user.name
                                ? appointment.user.name
                                : 'نا مشخص'}
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row className="profileInfoRow">
                          <Col>
                            <h6 className="profileInfoKey"> نام آرایشگر</h6> &nbsp;
                          </Col>
                          <Col>
                            <div className="profileInfoValue">
                              {appointment.barber && appointment.barber.name
                                ? appointment.barber.name
                                : 'نا مشخص'}
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Col>
                    <Col md={6} className={'appointmentDetailColumn'}>
                      <Col>
                        <Row className="profileInfoRow">
                          <Col>
                            <h6 className="profileInfoKey"> زمان شروع نوبت</h6> &nbsp;
                          </Col>
                          <Col>
                            <div className="profileInfoValue">
                              {appointment.startTime ? appointment.startTime : 'نا مشخص'}
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row className="profileInfoRow">
                          <Col>
                            <h6 className="profileInfoKey"> زمان پایان نوبت</h6> &nbsp;
                          </Col>
                          <Col>
                            <div className="profileInfoValue">
                              {appointment.endTime ? appointment.endTime : 'نا مشخص'}
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <Row className="profileInfoRow">
                          <Col>
                            <h6 className="profileInfoKey">وضعیت نوبت</h6> &nbsp;
                          </Col>
                          <Col>
                            <div className="profileInfoValue">
                              {appointment.status
                                ? appointment.status === 'submitted'
                                  ? 'در انتطار بررسی'
                                  : appointment.status === 'approved'
                                  ? 'تایید شده'
                                  : appointment.status === 'rejected'
                                  ? 'رد شده'
                                  : 'نا مشخص'
                                : 'نا مشخص'}
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Col>
                    <Row>
                      <div className="appointmentStatusButtonContainer">
                        {appointment.status === 'submitted' && (
                          <div>
                            <button
                              className="btn appointmentStatusButton"
                              onClick={() => {
                                dispatch(approveAppointment(appointment._id));
                              }}
                            >
                              تایید نوبت
                            </button>
                            <button
                              className="btn appointmentStatusButton"
                              style={{ backgroundColor: '#ff8f8f' }}
                              onClick={() => {
                                dispatch(rejectAppointment(appointment._id));
                              }}
                            >
                              رد نوبت
                            </button>
                          </div>
                        )}
                        {url && (
                          <Link to={url} key={url}>
                            <button
                              className="btn appointmentStatusButton"
                              style={{ backgroundColor: 'rgb(212 202 150)' }}
                            >
                              بازگشت
                            </button>
                          </Link>
                        )}
                      </div>
                    </Row>
                  </Row>
                </Col>
                <Col md={5} className="appointmentServices">
                  {appointment.services && appointment.services.length !== 0 && (
                    <Row className="defaultContainer">
                      <h5 className="sectionTitle">خدمات نوبت</h5>

                      <Row className="serviceTopRow">
                        <Col xs={6}>
                          <h6>خدمات</h6>
                        </Col>
                        <Col xs={3}>
                          <h6 className="text-align-center">مدت زمان</h6>
                        </Col>
                        <Col xs={3}>
                          <h6 className="text-align-center">مبلغ</h6>
                        </Col>
                      </Row>
                      <hr />
                      <Row>
                        {appointment.services.map((service) => {
                          return (
                            <Row className="serviceRow" key={Math.random()}>
                              <Col
                                xs={6}
                                // style={{ paddingLeft: "1rem !important" }}
                              >
                                <h6 key={Math.random()}>{service.title}</h6>
                              </Col>
                              <Col xs={3}>
                                <h6 className="text-align-center" key={Math.random()}>
                                  {service.time} دقیقه
                                </h6>
                              </Col>
                              <Col xs={3}>
                                <h6 className="text-align-center" key={Math.random()}>
                                  {service.price.toLocaleString()} تومان
                                </h6>
                              </Col>
                            </Row>
                          );
                        })}
                      </Row>

                      <br />
                      <Row className="serviceTotalRow">
                        <Col xs={6}>
                          <h6>مجموع</h6>
                        </Col>
                        <Col xs={3}>
                          <h6 className="text-align-center">
                            {getDurationSum(appointment.services)} دقیقه
                          </h6>
                        </Col>
                        <Col xs={3}>
                          <h6 className="text-align-center">
                            {getPriceSum(appointment.services).toLocaleString()} تومان
                          </h6>
                        </Col>
                      </Row>
                      <br />
                    </Row>
                  )}
                </Col>
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
