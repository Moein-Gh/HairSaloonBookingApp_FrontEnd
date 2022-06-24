import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getFacilityDetail } from "../actions/facilityActions";
import BarberServicesTab from "../components/BarberServicesTab";
import BarberShopTab from "../components/BarberShopTab";
import Loader from "../components/Loader";
import MainCarousel from "../components/MainCarousel";
import { EMPTY_SELECT_BARBER } from "../constants/userConstants";

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
  useEffect(() => {
    if (!userInfo) navigate("/login");
    else {
      dispatch(getFacilityDetail(facilityId));
      dispatch({ type: EMPTY_SELECT_BARBER });
    }
  }, [dispatch, navigate, userInfo, facilityId]);
  return (
    <>
      {facilityDetailLoading ? (
        <Loader />
      ) : facility ? (
        <Row className="defaultContainer">
          <Row>
            <Col lg={7}>
              <MainCarousel />
            </Col>
            <Col lg={5} className="">
              <Col className="px-5  h-100">
                <h4 className="sectionTitle">
                  {" "}
                  آرایشگاه {facility.name ? facility.name : "نا مشخص"}
                </h4>
                <Row>
                  <Col className="my-5">
                    <Row className="facilityInfoRow">
                      <Col>
                        <h6 className="facilityInfoKey"> نام مدیر</h6> &nbsp;
                      </Col>
                      <Col className="facilityInfoValue">
                        {facility.manager
                          ? facility.manager.name
                            ? facility.manager.name
                            : "نا مشخص"
                          : "نا مشخص"}
                      </Col>
                    </Row>
                    <br />
                    <Row className="facilityInfoRow">
                      <Col>
                        <h6 className="facilityInfoKey"> زمان شروع کار</h6>{" "}
                        &nbsp;
                      </Col>
                      <Col className="facilityInfoValue">
                        {facility.openTime
                          ? facility.openTime
                            ? facility.openTime
                            : "نا مشخص"
                          : "نا مشخص"}
                      </Col>
                    </Row>
                    <br />
                    <Row className="facilityInfoRow">
                      <Col>
                        <h6 className="facilityInfoKey"> زمان پایان کار</h6>{" "}
                        &nbsp;
                      </Col>
                      <Col className="facilityInfoValue">
                        {facility.closeTime
                          ? facility.closeTime
                            ? facility.closeTime
                            : "نا مشخص"
                          : "نا مشخص"}
                      </Col>
                    </Row>
                    <br />
                    <Row className="facilityInfoRow">
                      <Col>
                        <h6 className="facilityInfoKey"> نوع آرایشگاه</h6>{" "}
                        &nbsp;
                      </Col>
                      <Col className="facilityInfoValue">
                        {facility.customerGender === "male"
                          ? "مخصوص آقایان"
                          : "مخصوص بانوان"}
                      </Col>
                    </Row>
                    <br />
                    <Row className="facilityInfoRow">
                      <Col>
                        <h6 className="facilityInfoKey">شماره تماس</h6> &nbsp;
                      </Col>
                      <Col className="facilityInfoValue">
                        {facility.phoneNumber
                          ? facility.phoneNumber
                          : "نا مشخص"}
                      </Col>
                    </Row>
                    <br />
                    <Row className="facilityInfoRow">
                      <Col>
                        <h6 className="facilityInfoKey"> توضیحات</h6> &nbsp;
                      </Col>
                      <Col className="facilityInfoValue">
                        {facility.description
                          ? facility.description
                          : "نا مشخص"}
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {/* <div>
               
                
                 
                  <h4>
                    {facility.description ? facility.description : "نا مشخص"}
                  </h4>
                 
        
                
                </div> */}
              </Col>
            </Col>
          </Row>
        </Row>
      ) : (
        <h4>برای مشاهده خدمات ، آرایشگر مورد نظر خود را انتخاب نمایید </h4>
      )}

      <Row className="defaultContainer mt-3">
        <BarberShopTab />
      </Row>
      <Row id="services" className="defaultContainer mt-3">
        {id && barberFacilityId === facilityId ? (
          <BarberServicesTab userId={id} key={barberReset} />
        ) : (
          <h4>برای مشاهده خدمات ، آرایشگر مورد نظر خود را انتخاب نمایید </h4>
        )}
      </Row>
    </>
  );
};

export default BarberShopScreen;
