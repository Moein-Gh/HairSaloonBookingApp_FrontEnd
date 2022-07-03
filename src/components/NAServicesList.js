import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

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
        <Col className="appointmentServices">
          <Row className="NAServicesListContainer">
            <Row className="serviceTopRow">
              <Col xs={6}>
                <h6>خدمات</h6>
              </Col>
              <Col xs={3}>
                <h6 className="text-align-center">مدت زمان</h6>
              </Col>
              <Col xs={3}>
                <h6 className="text-align-center">مبلغ</h6>
              </Col>
            </Row>
            <hr />

            <br />
            <Row className="serviceTotalRow">
              <Col xs={6}>
                <h6>مجموع</h6>
              </Col>
              <Col xs={3}>
                <h6 className="text-align-center">{getDurationSum(serviceList)} دقیقه</h6>
              </Col>
              <Col xs={3}>
                <h6 className="text-align-center">
                  {getPriceSum(serviceList).toLocaleString()} تومان
                </h6>
              </Col>
            </Row>
            <br />
          </Row>
        </Col>
      ) : (
        <Row>
          <Col className="appointmentServices">
            {serviceList && serviceList.length !== 0 && (
              <Row className="NAServicesListContainer">
                <Row className="serviceTopRow">
                  <Col xs={6}>
                    <h6>خدمات</h6>
                  </Col>
                  <Col xs={3}>
                    <h6 className="text-align-center">مدت زمان</h6>
                  </Col>
                  <Col xs={3}>
                    <h6 className="text-align-center">مبلغ</h6>
                  </Col>
                </Row>
                <hr />
                <Row>
                  {serviceList.map((service) => {
                    return (
                      <Row className="serviceRow">
                        <Col
                          xs={6}
                          // style={{ paddingLeft: "1rem !important" }}
                        >
                          <h6 key={Math.random()}>{service.title}</h6>
                        </Col>
                        <Col xs={3}>
                          <h6 className="text-align-center" key={Math.random()}>
                            {service.time} دقیقه
                          </h6>
                        </Col>
                        <Col xs={3}>
                          <h6 className="text-align-center" key={Math.random()}>
                            {service.price.toLocaleString()} تومان
                          </h6>
                        </Col>
                      </Row>
                    );
                  })}
                </Row>

                <br />
                <Row className="serviceTotalRow">
                  <Col xs={6}>
                    <h6>مجموع</h6>
                  </Col>
                  <Col xs={3}>
                    <h6 className="text-align-center">{getDurationSum(serviceList)} دقیقه</h6>
                  </Col>
                  <Col xs={3}>
                    <h6 className="text-align-center">
                      {getPriceSum(serviceList).toLocaleString()} تومان
                    </h6>
                  </Col>
                </Row>
                <br />
              </Row>
            )}
          </Col>
        </Row>
      )}
    </>
  );
};

export default NAServicesList;
