import React from "react";
import ChooseDate from "./chooseDate";
import ChooseTime from "./ChooseTime";

const ChooseDateAndTime = ({ selectedDay, setSelectedDay }) => {
  return (
    <>
      <ChooseDate selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
      <ChooseTime />
    </>
  );
};

export default ChooseDateAndTime;
