import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { SET_BACK_URL } from "../constants/userConstants";

const Appointment = ({ appointment }) => {
  const currentUrl = useLocation().pathname;
  const dispatch = useDispatch();
  let cost = 0;
  let duration = 0;
  if (appointment) {
    appointment.services.forEach((service) => {
      cost = cost + Number(service.price);
      duration = duration + service.time;
    });
  }
  return (
    <>
      <Row className="appointmentCard">
        <Col lg={10} md={10} sm={12}>
          <Row>
            <Col sm={4} xs={6} className="appointmentTextContainer">
              <div>
                <h6 className="appointmentText">
                  نام کاربر: {appointment.user && appointment.user.name}
                </h6>
              </div>
              <div>
                <h6 className="appointmentText">
                  تاریخ:{" "}
                  {appointment.startTime && appointment.startTime.split(" ")[0]}
                </h6>
              </div>
            </Col>
            <Col sm={4} xs={6} className="appointmentTextContainer">
              <div>
                <h6 className="appointmentText">
                  آرایشگاه: {appointment.facility && appointment.facility.name}
                </h6>
              </div>
              <div>
                <h6 className="appointmentText">
                  آرایشگر: {appointment.barber && appointment.barber.name}
                </h6>
              </div>
            </Col>
            <Col sm={4} xs={12} className="appointmentTextContainer">
              <div>
                <h6 className="appointmentText">مدت زمان: {duration} دقیقه</h6>
              </div>
              <div>
                <h6 className="appointmentText">مبلغ: {cost} هزار تومان</h6>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={2} md={2} sm={12}>
          <Col className="appointmentButtonContainer">
            <Link
              to={`/appointmentScreen/${appointment._id}`}
              onClick={() => {
                dispatch({ type: SET_BACK_URL, url: currentUrl });
              }}
            >
              <button className="btn appointmentButton">اطلاعات بیشتر</button>
            </Link>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Appointment;
