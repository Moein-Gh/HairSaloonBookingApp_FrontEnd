import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { deleteService } from "../actions/serviceActions";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import {
  DELETE_SERVICE_REQUEST,
  SET_EDIT_SERVICE_INFO,
} from "../constants/serviceConstants";

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
      type: SET_EDIT_SERVICE_INFO,
      service: {
        id: service._id,
        title: service.title,
        time: service.time,
        price: service.price,
        categoryId: service.categoryId._id,
      },
    });
  };

  const removeHandler = () => {
    dispatch(deleteService(service._id));
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

        <Popconfirm
          title="آیا از حذف این خدمت اطمینان دارید ؟"
          onConfirm={removeHandler}
        >
          <button className="btn">حذف</button>
        </Popconfirm>
      </Col>
    </Row>
  );
};

export default EditableService;
