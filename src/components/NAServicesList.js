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
      sum = sum + service.time;
    });
    if (sum % 15 !== 0) {
      sum = sum + (15 - (sum % 15));
    }
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
                  return <h6 key={Math.random()}>{service.time} دقیقه</h6>;
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
                <h5>{getDurationSum(serviceList)} دقیقه</h5>
              </Col>
              <Col xs={2}>
                <h5>{getPriceSum(serviceList).toLocaleString()} تومان</h5>
              </Col>
            </Row>
            <br />
            <h6>
              * مجموع مدت زمان نوبت به نزدیک ترین ربع ساعت به سمت بالا گرد شده
              است
            </h6>
          </Col>
        </Row>
      )}
    </>
  );
};

export default NAServicesList;
