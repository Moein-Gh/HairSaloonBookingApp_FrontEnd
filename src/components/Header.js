import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
const Header = () => {

  const userLogin = useSelector((state) => {
    return state.userLogin
  })
  const { loading, error, userInfo } = userLogin
  return (
    <>
      <header>
        <Row className="headerContainer">
          <Col xs={2} className="flex-center text-align-center">
            {userInfo&& <SideBar />}
          </Col>
          <Col xs={8} className="flex-center headerMiddle text-align-center">
            <Link to={"/"} className="headerLink">
              <h1>سینوا</h1>
            </Link>
          </Col>
          <Col xs={2} className="flex-center text-align-center">
            <Link to={"/"}>
              <svg id="Layer_1" height="50" viewBox="0 0 512 512" width="50">
                <g>
                  <path
                    d="m270.57 312-152.058-124.742c-.621-.504-2.514-2.04-2.514-5.258s1.893-4.753 2.514-5.258l152.058-125.242c9.405-7.633 20.935-11.45 32.464-11.45 8.815 0 17.626 2.239 25.491 6.701l-2.254-1.829c-40.945-33.229-99.602-33.229-140.547 0l-105.021 85.232c-32.939 26.732-32.939 76.959 0 103.691l105.022 85.233c40.945 33.229 99.602 33.229 140.547 0l4.694-3.81c-18.473 11.894-43.045 10.812-60.396-3.268z"
                    fill="#cee1f2"
                  />
                  <path
                    d="m255.998 364c-30.089 0-59.521-10.438-82.877-29.393l-105.022-85.232c-20.4-16.557-32.101-41.114-32.101-67.375s11.7-50.818 32.101-67.375l105.022-85.232c23.356-18.955 52.788-29.393 82.877-29.393s59.521 10.438 82.877 29.393l105.022 85.232c26.838 21.781 38.188 57.396 28.917 90.734-2.96 10.641-13.98 16.871-24.628 13.91-10.642-2.959-16.869-13.985-13.909-24.627 5.004-17.995-1.113-37.212-15.587-48.958l-105.022-85.233c-33.416-27.119-81.924-27.119-115.34 0l-105.022 85.233c-10.999 8.926-17.308 22.163-17.308 36.316s6.309 27.39 17.308 36.316l105.022 85.232c33.358 27.072 81.758 27.12 115.169.138l17.543-14.921c8.413-7.156 21.035-6.139 28.192 2.276 7.156 8.414 6.138 21.036-2.276 28.192l-17.727 15.078c-.117.1-.235.198-.354.295-23.355 18.956-52.788 29.394-82.877 29.394z"
                    fill="#1428bf"
                  />
                  <path
                    d="m255.998 512c-30.089 0-59.521-10.438-82.877-29.393l-105.022-85.232c-24.591-19.958-36.355-51.739-30.703-82.94 1.97-10.869 12.383-18.08 23.245-16.114 10.868 1.969 18.083 12.376 16.114 23.245-3.051 16.842 3.291 33.989 16.551 44.751l105.022 85.232c33.416 27.119 81.924 27.119 115.34 0l105.022-85.232c10.999-8.926 17.308-22.164 17.308-36.316s-6.309-27.39-17.308-36.316l-105.022-85.232c-33.403-27.109-81.89-27.118-115.307-.027l-14.681 12.04c-8.539 7.006-21.142 5.76-28.146-2.781s-5.76-21.143 2.781-28.147l14.806-12.144c23.356-18.956 52.788-29.394 82.877-29.394s59.521 10.438 82.877 29.393l105.022 85.232c20.4 16.557 32.101 41.114 32.101 67.375s-11.7 50.818-32.101 67.375l-105.022 85.232c-23.355 18.955-52.788 29.393-82.877 29.393z"
                    fill="#ff5cf4"
                  />
                </g>
              </svg>
            </Link>
          </Col>
        </Row>
      </header>
    </>
  );
};
export default Header;
