import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

const NAServicesList = ({ serviceList }) => {
  const getPriceSum = (services) => {
    let sum = 0;
    services.forEach((service) => {
      sum = sum + service.price;
    });
    return sum;
  };

  const getDurationSum = (services) => {
    let sum = 0;
    services.forEach((service) => {
      sum = sum + service.duration;
    });
    return sum;
  };
  useEffect(() => {}, [serviceList]);

  return (
    <>
      {serviceList.length === 0 ? (
        <Row className="defaultContainer">
          <Col>
            <h5>خدمتی انتخاب نشده است</h5>
          </Col>
        </Row>
      ) : (
        <Row className="defaultContainer">
          <Col>
            <Row>
              <Col xs={8}>
                <h5>خدمات انتخاب شده</h5>
                {serviceList.map((service) => {
                  return <h6 key={Math.random()}>{service.title}</h6>;
                })}
              </Col>
              <Col xs={2}>
                <h5>مدت زمان</h5>
                {serviceList.map((service) => {
                  return <h6 key={Math.random()}>{service.duration}</h6>;
                })}
              </Col>
              <Col xs={2}>
                <h5>مبلغ</h5>
                {serviceList.map((service) => {
                  return (
                    <h6 key={Math.random()}>
                      {service.price.toLocaleString()} تومان
                    </h6>
                  );
                })}
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={8}>
                <h5>مجموع</h5>
              </Col>
              <Col xs={2}>
                <h5>{getDurationSum(serviceList)}</h5>
              </Col>
              <Col xs={2}>
                <h5>{getPriceSum(serviceList).toLocaleString()} تومان</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default NAServicesList;
