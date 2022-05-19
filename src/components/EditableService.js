import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { EDIT_SERVICE_INFO } from "../constants/serviceConstants";

const EditableService = ({ service }) => {
  let headerHeight;
  setTimeout(() => {
    headerHeight = document.querySelector("header").clientHeight;
  }, 100);
  const scrollWidthOffset = (el, height) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -(height + 10);
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const dispatch = useDispatch();
  const editHandler = () => {
    dispatch({
      type: EDIT_SERVICE_INFO,
      service: {
        id: service._id,
        title: service.title,
        time: service.time,
        price: service.price,
        categoryId: service.categoryId._id,
      },
    });
  };

  return (
    <Row className="serviceItem">
      <Col xs={7} className="serviceTitleContainer">
        <div>
          <h6 className="serviceTitleText">{service.title}</h6>
        </div>
      </Col>
      <Col xs={2} className="serviceDurationContainer text-align-center">
        <div>
          <h6 className="serviceDurationText">{service.time} دقیقه</h6>
        </div>
      </Col>
      <Col xs={2} className="servicePriceContainer text-align-center">
        <div>
          <h6 className="servicePriceText">
            {service.price.toLocaleString()} تومان
          </h6>
        </div>
      </Col>
      <Col xs={1}>
        <HashLink
          smooth
          scroll={(el) => {
            scrollWidthOffset(el, headerHeight);
          }}
          to={`/barberDashboard#edit`}
        >
          <button className="btn" onClick={editHandler}>
            ویرایش
          </button>
        </HashLink>

        <button className="btn">حذف</button>
      </Col>
    </Row>
  );
};

export default EditableService;
