import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getFacilityDetail } from "../actions/facilityActions";
import { getUserDetail } from "../actions/userActions";
import NAServicesList from "./NAServicesList";

const NewAppointmentSummary = ({
  selectedDay,
  selectedTime,
  serviceList,
  NAFacilityId,
  NABarberId,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFacilityDetail(NAFacilityId));
    dispatch(getUserDetail(NABarberId));
  }, [
    dispatch,
    NAFacilityId,
    NABarberId,
    selectedDay,
    selectedTime,
    serviceList,
  ]);

  const userDetail = useSelector((state) => {
    return state.userDetail;
  });
  const { user } = userDetail;

  const facilityDetail = useSelector((state) => {
    return state.facilityDetail;
  });
  const { facility } = facilityDetail;

  return (
    <>
      {user && facility ? (
        <Row className="defaultContainer">
          <h4>آرایشگاه {facility.name}</h4>
          <h4>آرایشگر {user.name}</h4>
          <NAServicesList serviceList={[...serviceList]} />
          <h4>{`روز ${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`}</h4>
          <h4>{`ساعت شروع نوبت : ${selectedTime.startTime.split(" ")[1]}`}</h4>
          <h4>{`ساعت پایان نوبت : ${selectedTime.endTime.split(" ")[1]}`}</h4>
        </Row>
      ) : (
        <></>
      )}
    </>
  );
};

export default NewAppointmentSummary;
