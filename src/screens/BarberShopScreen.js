import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getFacilityDetail,
  getFacilitysBarbers,
} from "../actions/facilityActions";
import BarberServicesTab from "../components/BarberServicesTab";
import BarberShopTab from "../components/BarberShopTab";
import Loader from "../components/Loader";

const BarberShopScreen = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let { facilityId } = useParams("facilityId");

  const userLogin = useSelector((state) => {
    return state.userLogin;
  });
  const { loading, error, userInfo } = userLogin;

  const facilityDetail = useSelector((state) => {
    return state.facilityDetail;
  });
  const {
    loading: facilityDetailLoading,
    error: facilityDetailError,
    facility,
  } = facilityDetail;

  const selectBarber = useSelector((state) => {
    return state.selectBarber;
  });
  const { id, facilityId: barberFacilityId, reset: barberReset } = selectBarber;
  console.log(barberFacilityId);
  useEffect(() => {
    if (!userInfo) navigate("/login");
    else {
      dispatch(getFacilityDetail(facilityId));
    }
  }, [userInfo, facilityId]);
  return (
    <>
      <Row className="defaultContainer">
        <Row className="barberShopHeroContainer">
          <Col>
            {facilityDetailLoading ? (
              <Loader />
            ) : facility ? (
              <Row>
                <Col xs={8} className="barberShopImageContainer">
                  <div>
                    <h4>{facility.name ? facility.name : "نا مشخص"}</h4>
                    <h4>
                      {facility.manager
                        ? facility.manager.name
                          ? facility.manager.name
                          : "نا مشخص"
                        : "نا مشخص"}
                    </h4>
                    <h4>{facility.openTime ? facility.openTime : "نا مشخص"}</h4>
                    <h4>
                      {facility.closeTime ? facility.closeTime : "نا مشخص"}
                    </h4>
                    <h4>
                      {facility.description ? facility.description : "نا مشخص"}
                    </h4>
                    <h4>
                      {facility.customerGender == "male"
                        ? "مخصوص آقایان"
                        : "مخصوص بانوان"}
                    </h4>
                    <h4>
                      {facility.phoneNumber ? facility.phoneNumber : "نا مشخص"}
                    </h4>
                    <h4>
                      {facility.NumberOfFollowers
                        ? facility.NumberOfFollowers
                        : "نا مشخص"}
                    </h4>
                  </div>
                </Col>
                <Col xs={4} className="barberShopImageContainer">
                  <Image
                    src={
                      facility.avatarId
                        ? facility.avatarId.link
                        : "../images/3.jpg"
                    }
                    className="barberShopImage"
                  />
                </Col>
              </Row>
            ) : (
              <h6>اطلاعاتی برای نمایش وجود ندارد</h6>
            )}
          </Col>
        </Row>
      </Row>

      <Row className="defaultContainer mt-3">
        <BarberShopTab />
      </Row>
      <Row id="services" className="defaultContainer mt-3">
        {id && barberFacilityId == facilityId ? (
          <BarberServicesTab userId={id} key={barberReset} />
        ) : (
          <h4>برای مشاهده خدمات ، آرایشگر مورد نظر خود را انتخاب نمایید </h4>
        )}
      </Row>
    </>
  );
};

export default BarberShopScreen;
