import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { removeBarber } from "../actions/userActions";
import { REMOVE_BARBER_RESET } from "../constants/userConstants";

let headerHeight;
setTimeout(() => {
  headerHeight = document.querySelector("header").clientHeight;
}, 100);
const scrollWidthOffset = (el, height) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -(height + 10);
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const ManagerBarberCard = ({ barber }) => {
  const dispatch = useDispatch();
  let image = barber.image;

  const removeHandler = () => {
    dispatch(removeBarber(barber._id));
    setTimeout(() => {
      // dispatch({ type: REMOVE_BARBER_RESET });
    }, 200);
  };

  return (
    <Col className="barberCardContainer">
      <Row className="barberCardImageContainer">
        <Col className="barberCardImage">
          <Image src={image} className="barberImage" />
        </Col>
      </Row>

      <Row>
        <div>
          <h5>{barber.name}</h5>
        </div>
        <hr className="barberCardHr" />

        <Row className="mb-2">
          <Col>
            <HashLink
              smooth
              scroll={(el) => {
                scrollWidthOffset(el, headerHeight);
              }}
              to={"/barbershop#services"}
              className="barberCardButton"
            >
              <button className="btn">مشاهده گزارش</button>
            </HashLink>

            <button className="btn danger" onClick={removeHandler}>
              حذف آرایشگر
            </button>
          </Col>
        </Row>
      </Row>
    </Col>
  );
};

export default ManagerBarberCard;
