import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { SELECT_BARBER } from "../constants/userConstants";

let headerHeight;
setTimeout(() => {
  headerHeight = document.querySelector("header").clientHeight;
}, 100);
const scrollWidthOffset = (el, height) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -(height + 10);
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const BarberCard = ({ barber }) => {
  let image = barber.image;
  console.log(barber);
  const dispatch = useDispatch();
  const { facilityId } = useParams();
  const seeServices = () => {
    dispatch({
      type: SELECT_BARBER,
      id: barber._id,
      facilityId: barber.facility._id,
    });
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
              to={`/barbershop/${facilityId}#services`}
              className="barberCardButton"
            >
              <button
                className="btn"
                onClick={() => {
                  seeServices();
                }}
              >
                مشاهده خدمات
              </button>
            </HashLink>
          </Col>
        </Row>
      </Row>
    </Col>
  );
};

export default BarberCard;
