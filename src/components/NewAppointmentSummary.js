import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFacilityDetail } from '../actions/facilityActions';
import { getUserDetail } from '../actions/userActions';

const NewAppointmentSummary = ({
  selectedDay,
  selectedTime,
  serviceList,
  NAFacilityId,
  NABarberId,
}) => {
  console.log(selectedDay, selectedTime, serviceList, NAFacilityId, NABarberId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFacilityDetail(NAFacilityId));
    dispatch(getUserDetail(NABarberId));
  }, [dispatch, NAFacilityId, NABarberId, selectedDay, selectedTime, serviceList]);

  const userDetail = useSelector((state) => {
    return state.userDetail;
  });
  const { user } = userDetail;
  const facilityDetail = useSelector((state) => {
    return state.facilityDetail;
  });
  const { facility } = facilityDetail;

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
  return (
    <>
      <h1>d</h1>
      {user && facility && selectedDay ? (
        <Row>
          <Col md={7} className="appointmentDetail">
            <Row className="defaultContainer">
              <h4 className="sectionTitle">اطلاعات نوبت</h4>
              <hr />
              <Col
                md={6}
                style={{ borderLeft: '.5px solid lightgrey' }}
                className={'appointmentDetailColumn'}
              >
                <Col>
                  <Row className="profileInfoRow">
                    <Col>
                      <h6 className="profileInfoKey"> نام آرایشگاه</h6> &nbsp;
                    </Col>
                    <Col>
                      <div className="profileInfoValue">
                        {facility && facility.name ? facility.name : 'نا مشخص'}
                      </div>
                    </Col>
                  </Row>
                  <Row className="profileInfoRow">
                    <Col>
                      <h6 className="profileInfoKey">نام آرایشگر</h6> &nbsp;
                    </Col>
                    <Col>
                      <div className="profileInfoValue">
                        {user && user.name ? user.name : 'نا مشخص'}
                      </div>
                    </Col>
                  </Row>
                  <Row className="profileInfoRow">
                    <Col>
                      <h6 className="profileInfoKey"> زمان شروع نوبت</h6> &nbsp;
                    </Col>
                    <Col>
                      <div className="profileInfoValue">
                        {selectedTime ? selectedTime.startTime.split(' ')[1] : 'نا مشخص'}
                      </div>
                    </Col>
                  </Row>
                  <Row className="profileInfoRow">
                    <Col>
                      <h6 className="profileInfoKey"> روز نوبت</h6> &nbsp;
                    </Col>
                    <Col>
                      <div className="profileInfoValue">
                        {selectedDay
                          ? selectedDay.year / selectedDay.month / selectedDay.day
                          : 'نا مشخص'}
                      </div>
                    </Col>
                  </Row>
                  <Row className="profileInfoRow">
                    <Col>
                      <h6 className="profileInfoKey"> زمان پایان نوبت</h6> &nbsp;
                    </Col>
                    <Col>
                      <div className="profileInfoValue">
                        {selectedTime ? selectedTime.endTime.split(' ')[1] : 'نا مشخص'}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Col>
              <Col md={6} className={'appointmentDetailColumn'}>
                <Col>
                  {serviceList && serviceList.length !== 0 && (
                    <Row>
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
                            <Row className="serviceRow" key={Math.random()}>
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
              </Col>
            </Row>
          </Col>
        </Row>
      ) : (
        <></>
      )}
    </>
  );
};

export default NewAppointmentSummary;
