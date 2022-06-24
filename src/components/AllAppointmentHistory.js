import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Appointment from "./Appointment";

const AllAppointmentHistory = ({ appointments }) => {
  useEffect(() => {
    console.log(appointments);
  }, [appointments]);

  return (
    <>
      <Col className="defaultContainer h-100">
        <div className="flex-center position-relative">
          <h4 className="">همه نوبت ها</h4>
        </div>

        <hr />
        <Col>
          <Link to={"/allUserAppointments"} className="topLeftAbsoluteButton">
            <button className="btn">نوبت ها</button>
          </Link>
          {appointments && appointments.length > 0 ? (
            appointments.map((appointment) => {
              return (
                <Appointment appointment={appointment} key={appointment._id} />
              );
            })
          ) : (
            <h4>نوبتی برای نمایش وجود ندارد</h4>
          )}
        </Col>
      </Col>
    </>
  );
};

export default AllAppointmentHistory;
