import React from "react";
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

      {times && (
        <ChooseTime
          possibleTimes={times}
          selectedDay={selectedDay}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      )}
    </>
  );
};

export default ChooseDateAndTime;
