import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShopCard = ({ facility }) => {
  return (
    <>
      {facility && (
        <Col className="facilityCardContainer">
          <Row className="facilityCardImageContainer">
            <Col
              className="facilityCardImage"
              style={{
                backgroundImage: `url(${
                  facility.image ? facility.image : "./images/2.jpg"
                })`,
              }}
            >
              {" "}
              <div className="imageTag">
                <h6>{facility.customerGender}</h6>
              </div>
            </Col>
          </Row>

          <Row>
            <div>
              <h5>{facility.name}</h5>
            </div>
            <hr className="facilityCardHr" />
            <Row className="pb-2">
              <Col
                xs={6}
                className="d-flex justify-content-center align-items-center"
              >
                <h6>{facility.distance ? facility.distance : "1 کیلومتر"}</h6>
              </Col>
              <Col xs={6}>
                <Link
                  to={`/barberShop/${facility._id}`}
                  className="facilityCardButton"
                >
                  <button className="btn">اطلاعات بیشتر</button>
                </Link>
              </Col>
            </Row>
          </Row>
        </Col>
      )}
    </>
  );
};

export default ShopCard;
