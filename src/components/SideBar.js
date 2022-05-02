import React, { useState } from "react";
import { Button, Col, Image, Offcanvas, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import Profile from "./Profile";

function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navLinks = [
    {
      title: "خانه",
      link: "/",
      isActive: false,
      iconTag: (
        <svg height="25" viewBox="0 0 48 48" width="25">
          <g id="Home">
            <path d="m40.86 11.381-13.525-8.678c-1.871-1.2-4.8-1.2-6.67 0l-13.524 8.679c-1.833 1.176-3.215 3.705-3.215 5.883v24.391c0 2.481 2.019 4.5 4.5 4.5h31.148c2.481 0 4.5-2.019 4.5-4.5v-24.391c0-2.179-1.382-4.707-3.214-5.884zm.214 30.274c0 .827-.673 1.5-1.5 1.5h-31.148c-.827 0-1.5-.673-1.5-1.5v-24.39c0-1.141.875-2.742 1.835-3.358l13.524-8.679c.449-.288 1.082-.432 1.715-.432s1.266.144 1.714.432l13.525 8.678c.961.616 1.835 2.217 1.835 3.358zm-17.074-19.494c-5.632 0-10.213 4.582-10.213 10.213v6.793c0 .828.671 1.5 1.5 1.5s1.5-.672 1.5-1.5v-6.793c0-3.978 3.236-7.214 7.213-7.214s7.213 3.236 7.213 7.214v6.793c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5v-6.793c0-5.632-4.581-10.213-10.213-10.213z" />
          </g>
        </svg>
      ),
    },
    {
      title: "آرایشگاه",
      link: "/barberShop",
      isActive: false,
      iconTag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          height="25"
          viewBox="0 0 512 512"
          width="25"
        >
          <g id="Scissors">
            <g>
              <path d="m293.541 187.321c-9.116-6.237-11.451-18.683-5.215-27.799l103.168-150.812c6.237-9.116 18.681-11.452 27.8-5.215 9.116 6.237 11.451 18.683 5.215 27.8l-103.168 150.811c-6.255 9.143-18.707 11.434-27.8 5.215z" />
            </g>
            <path d="m376.001 312.002c-14.105 0-27.534 2.941-39.715 8.233l-215.843-311.621c-6.29-9.081-18.749-11.343-27.83-5.053-9.08 6.289-11.342 18.749-5.053 27.829l144.462 208.564-56.222 80.318c-12.203-5.315-25.661-8.27-39.798-8.27-55.14 0-100 44.86-100 100s44.86 100 100 100 100-44.86 100-100c0-26.609-10.449-50.822-27.457-68.757l47.761-68.23 47.214 68.164c-17.044 17.942-27.518 42.182-27.518 68.823 0 55.14 44.86 100 100 100s100-44.86 100-100-44.861-100-100.001-100zm-240 160c-33.084 0-60-26.916-60-60s26.916-60 60-60 60 26.916 60 60-26.916 60-60 60zm240 0c-33.084 0-60-26.916-60-60s26.916-60 60-60 60 26.916 60 60-26.916 60-60 60z" />
          </g>
        </svg>
      ),
    },

    {
      title: "رزرو نوبت",
      link: "/bookingScreen",
      isActive: false,
      iconTag: (
        <svg height="25" viewBox="0 0 512 512" width="25">
          <g>
            <g>
              <g>
                <path d="M352.459,220c0-11.046-8.954-20-20-20h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206     C343.505,240,352.459,231.046,352.459,220z" />
                <path d="M126.459,280c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20H251.57c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20     H126.459z" />
                <path d="M173.459,472H106.57c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h245.889c22.056,0,40,17.944,40,40v123     c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80c0-44.112-35.888-80-80-80H106.57c-44.112,0-80,35.888-80,80v352     c0,44.112,35.888,80,80,80h66.889c11.046,0,20-8.954,20-20C193.459,480.954,184.505,472,173.459,472z" />
                <path d="M467.884,289.572c-23.394-23.394-61.458-23.395-84.837-0.016l-109.803,109.56c-2.332,2.327-4.052,5.193-5.01,8.345     l-23.913,78.725c-2.12,6.98-0.273,14.559,4.821,19.78c3.816,3.911,9,6.034,14.317,6.034c1.779,0,3.575-0.238,5.338-0.727     l80.725-22.361c3.322-0.92,6.35-2.683,8.79-5.119l109.573-109.367C491.279,351.032,491.279,312.968,467.884,289.572z      M333.776,451.768l-40.612,11.25l11.885-39.129l74.089-73.925l28.29,28.29L333.776,451.768z M439.615,346.13l-3.875,3.867     l-28.285-28.285l3.862-3.854c7.798-7.798,20.486-7.798,28.284,0C447.399,325.656,447.399,338.344,439.615,346.13z" />
                <path d="M332.459,120h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206c11.046,0,20-8.954,20-20S343.505,120,332.459,120z" />
              </g>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <>
      <div>
        <button onClick={handleShow} className="menuButton">
          <svg viewBox="0 0 24 24" width="30" height="30">
            <path d="M5 3C3.895 3 3 3.895 3 5C3 6.105 3.895 7 5 7C6.105 7 7 6.105 7 5C7 3.895 6.105 3 5 3 z M 12 3C10.895 3 10 3.895 10 5C10 6.105 10.895 7 12 7C13.105 7 14 6.105 14 5C14 3.895 13.105 3 12 3 z M 19 3C17.895 3 17 3.895 17 5C17 6.105 17.895 7 19 7C20.105 7 21 6.105 21 5C21 3.895 20.105 3 19 3 z M 5 10C3.895 10 3 10.895 3 12C3 13.105 3.895 14 5 14C6.105 14 7 13.105 7 12C7 10.895 6.105 10 5 10 z M 12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14C13.105 14 14 13.105 14 12C14 10.895 13.105 10 12 10 z M 19 10C17.895 10 17 10.895 17 12C17 13.105 17.895 14 19 14C20.105 14 21 13.105 21 12C21 10.895 20.105 10 19 10 z M 5 17C3.895 17 3 17.895 3 19C3 20.105 3.895 21 5 21C6.105 21 7 20.105 7 19C7 17.895 6.105 17 5 17 z M 12 17C10.895 17 10 17.895 10 19C10 20.105 10.895 21 12 21C13.105 21 14 20.105 14 19C14 17.895 13.105 17 12 17 z M 19 17C17.895 17 17 17.895 17 19C17 20.105 17.895 21 19 21C20.105 21 21 20.105 21 19C21 17.895 20.105 17 19 17 z" />
          </svg>
        </button>

        <Offcanvas
          show={show}
          onHide={handleClose}
          placement={"end"}
          className="menuContainer"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>به سینوا خوش آمدید</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Profile />

            <Row>
              <Col className="defaultContainer mt-2">
                {navLinks.map((item) => {
                  return (
                    <NavItem
                      navItem={item}
                      key={item.title}
                      setShow={setShow}
                    />
                  );
                })}
              </Col>
            </Row>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default SideBar;
