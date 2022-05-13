import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AllAppointmentHistory from "../components/AllAppointmentHistory";

const AllAppointment = () => {
  let navigate = useNavigate();

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) navigate("/login");
  }, [userInfo]);
  return (
    <>
      <Row className="defaultContainer text-align-center">
        <Col xs={4}>
          <Row>
            <Col>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="50"
                viewBox="0 0 512 512"
                width="50"
              >
                <path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" />
                <path d="m368 394.667969c-4.097656 0-8.191406-1.558594-11.308594-4.695313l-112-112c-3.007812-3.007812-4.691406-7.082031-4.691406-11.304687v-149.335938c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v142.699219l107.308594 107.308594c6.25 6.25 6.25 16.382812 0 22.632812-3.117188 3.136719-7.210938 4.695313-11.308594 4.695313zm0 0" />
              </svg>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>مجموع زمان نوبت ها</h5>
              <h5>600</h5>
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Row>
            <Col>
              <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                height={50}
                width={50}
                viewBox="0 0 438.891 438.891"
              >
                <g>
                  <g>
                    <g>
                      <path d="M347.968,57.503h-39.706V39.74c0-5.747-6.269-8.359-12.016-8.359h-30.824c-7.314-20.898-25.6-31.347-46.498-31.347     c-20.668-0.777-39.467,11.896-46.498,31.347h-30.302c-5.747,0-11.494,2.612-11.494,8.359v17.763H90.923     c-23.53,0.251-42.78,18.813-43.886,42.318v299.363c0,22.988,20.898,39.706,43.886,39.706h257.045     c22.988,0,43.886-16.718,43.886-39.706V99.822C390.748,76.316,371.498,57.754,347.968,57.503z M151.527,52.279h28.735     c5.016-0.612,9.045-4.428,9.927-9.404c3.094-13.474,14.915-23.146,28.735-23.51c13.692,0.415,25.335,10.117,28.212,23.51     c0.937,5.148,5.232,9.013,10.449,9.404h29.78v41.796H151.527V52.279z M370.956,399.185c0,11.494-11.494,18.808-22.988,18.808     H90.923c-11.494,0-22.988-7.314-22.988-18.808V99.822c1.066-11.964,10.978-21.201,22.988-21.42h39.706v26.645     c0.552,5.854,5.622,10.233,11.494,9.927h154.122c5.98,0.327,11.209-3.992,12.016-9.927V78.401h39.706     c12.009,0.22,21.922,9.456,22.988,21.42V399.185z" />
                      <path d="M179.217,233.569c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437,31.869l-14.106-14.629     c-3.919-4.131-10.425-4.363-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135     c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025     C179.628,233.962,179.427,233.761,179.217,233.569z" />
                      <path d="M329.16,256.034H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16     c5.771,0,10.449-4.678,10.449-10.449S334.931,256.034,329.16,256.034z" />
                      <path d="M179.217,149.977c-3.919-4.131-10.425-4.364-14.629-0.522l-33.437,31.869l-14.106-14.629     c-3.919-4.131-10.425-4.364-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135     c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025     C179.628,150.37,179.427,150.169,179.217,149.977z" />
                      <path d="M329.16,172.442H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16     c5.771,0,10.449-4.678,10.449-10.449S334.931,172.442,329.16,172.442z" />
                      <path d="M179.217,317.16c-3.919-4.131-10.425-4.363-14.629-0.522l-33.437,31.869l-14.106-14.629     c-3.919-4.131-10.425-4.363-14.629-0.522c-4.047,4.24-4.047,10.911,0,15.151l21.42,21.943c1.854,2.076,4.532,3.224,7.314,3.135     c2.756-0.039,5.385-1.166,7.314-3.135l40.751-38.661c4.04-3.706,4.31-9.986,0.603-14.025     C179.628,317.554,179.427,317.353,179.217,317.16z" />
                      <path d="M329.16,339.626H208.997c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449H329.16     c5.771,0,10.449-4.678,10.449-10.449S334.931,339.626,329.16,339.626z" />
                    </g>
                  </g>
                </g>
              </svg>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>تعداد نوبت ها</h5>
              <h5>15</h5>
            </Col>
          </Row>
        </Col>
        <Col xs={4}>
          <Row>
            <Col>
              <svg height={50} width={50} viewBox="0 0 32 32">
                <g id="balance_wallet_payment_cash">
                  <path d="m28 15h-7c-2.194 0-4 1.806-4 4s1.806 4 4 4h4v3c0 .549-.451 1-1 1h-16c-1.646 0-3-1.354-3-3v-15c0-1.646 1.354-3 3-3h2c.549 0 1-.451 1-1s-.451-1-1-1h-2c-2.743 0-5 2.257-5 5v15c0 2.743 2.257 5 5 5h16c1.646 0 3-1.354 3-3v-3h1c.549 0 1-.451 1-1v-6c0-.549-.451-1-1-1zm-1 6h-6c-1.097 0-2-.903-2-2s.903-2 2-2h6z" />
                  <path d="m7.64 8.07c-1.116.487-.747 1.93.36 1.93h16c.549 0 1 .451 1 1v1c0 .549.451 1 1 1s1-.451 1-1v-1c-.001-.795-.317-1.558-.88-2.12-.562-.563-1.325-.879-2.12-.88h-.32l-1.75-4.37c-.203-.505-.783-.757-1.29-.56zm13.88-.07h-8.13l7.05-2.71z" />
                </g>
              </svg>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>مجموع پرداختی ها</h5>
              <h5>1000000</h5>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <AllAppointmentHistory />
      </Row>
    </>
  );
};

export default AllAppointment;
