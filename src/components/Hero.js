import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainCarousel from "./MainCarousel";

const Hero = () => {
  return (
    <>
      <Row className="defaultContainer">
        <Col lg={8}>
          <MainCarousel />
        </Col>
        <Col lg={4} className="">
          <Col className="advanceSearchContainer">
            <div className="welcomeText">
              <br />
              <h2>به سینوا خوش آمدید</h2>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="heroBookingContainer">
              <br />
              <h4>از طریق سینوا نوبت خود را آسان رزرو کنید</h4>
              <br />
              <Link to={"/bookingScreen"}>
                {" "}
                <button
                  className="btn appointmentStatusButton"
                  style={{ backgroundColor: "rgb(212 202 150)" }}
                >
                  رزرو نوبت
                </button>
              </Link>
            </div>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Hero;
