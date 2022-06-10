import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserAppointments } from "../actions/appointmentActions";
import Appointment from "./Appointment";

// const appointments = [
//   {
//     key: 1,
//     date: "1400/02/01",
//     hour: "7:00",
//     facilityName: "سام راد",
//     barberName: "فراز محمدی",
//     cost: 50000,
//   },
//   {
//     key: 2,
//     date: "1400/02/01",
//     hour: "7:00",
//     facilityName: "سام راد",
//     barberName: "فراز محمدی",
//     cost: 50000,
//   },
//   {
//     key: 3,
//     date: "1400/02/01",
//     hour: "7:00",
//     facilityName: "سام راد",
//     barberName: "فراز محمدی",
//     cost: 50000,
//   },
// ];
const AppointmentHistory = () => {
  const dispatch = useDispatch();
  const appointmentUserList = useSelector((state) => {
    return state.appointmentUserList;
  });
  const { appointments } = appointmentUserList;

  useEffect(() => {
    dispatch(getUserAppointments());
  }, [dispatch]);
  return (
    <>
      <Col className="defaultContainer h-100">
        <div className="flex-center position-relative">
          <h4 className="">نوبت های قبلی</h4>
          <Link to={"/allUserAppointments"} className="topLeftAbsoluteButton">
            <button className="btn">نوبت ها</button>
          </Link>
        </div>

        <hr />
        <Col>
          {appointments && appointments.length > 0 ? (
            appointments.map((appointment, index) => {
              if (index < 3) {
                return (
                  <Appointment
                    appointment={appointment}
                    key={appointment._id}
                  />
                );
              }
            })
          ) : (
            <h4>نوبتی پیدا نشد</h4>
          )}
        </Col>
      </Col>
    </>
  );
};

export default AppointmentHistory;
