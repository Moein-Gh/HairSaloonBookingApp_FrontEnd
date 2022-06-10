import React from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ChooseDate from "./chooseDate";
import ChooseTime from "./ChooseTime";

const ChooseDateAndTime = ({
  selectedDay,
  setSelectedDay,
  serviceList,
  selectedTime,
  setSelectedTime,
}) => {
  const possibleTimes = useSelector((state) => {
    return state.possibleTimes;
  });
  const { possibleTimes: times } = possibleTimes;
  return (
    <>
      <ChooseDate
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        serviceList={serviceList}
        setSelectedTime={setSelectedTime}
      />

      <ChooseTime
        possibleTimes={times}
        selectedDay={selectedDay}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />
    </>
  );
};

export default ChooseDateAndTime;
