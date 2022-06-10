import React from "react";
import { Col, Row } from "react-bootstrap";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { getPossibleTimes } from "../actions/appointmentActions";
import { EMPTY_POSSIBLE_TIMES } from "../constants/appointmentConstants";
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
const ChooseDate = ({
  selectedDay,
  setSelectedDay,
  serviceList,
  setSelectedTime,
}) => {
  const dispatch = useDispatch();
  const NABarberInfo = useSelector((state) => {
    return state.NABarberInfo;
  });
  const { NABarberId } = NABarberInfo;
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

  const PossibleTimesHandler = () => {
    let duration = getDurationSum(serviceList);

    let date;
    if (selectedDay) {
      date = `${selectedDay.year}/${selectedDay.month}/${selectedDay.day}`;
    }

    dispatch(getPossibleTimes({ date, duration, NABarberId }));
    dispatch(getPossibleTimes({ date, duration, NABarberId }));
  };
  return (
    <>
      <Row className="defaultContainer mt-4">
        <Col className="datePickerContainer mx-4">
          <h4>انتخاب روز نوبت</h4>
          <DatePicker
            value={selectedDay}
            onChange={(e) => {
              dispatch({ type: EMPTY_POSSIBLE_TIMES });

              setSelectedTime({});
              setSelectedDay(e);
            }}
            shouldHighlightWeekends
            minimumDate={utils("fa").getToday()}
            locale="fa"
            renderFooter={() => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem 2rem",
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    dispatch({ type: EMPTY_POSSIBLE_TIMES });
                    setSelectedTime({});
                    setSelectedDay(null);
                  }}
                  className="btn"
                >
                  پاک کردن
                </button>
              </div>
            )}
          />
          <button disabled={!selectedDay} onClick={PossibleTimesHandler}>
            گرفتن زمان ها
          </button>
        </Col>
      </Row>
    </>
  );
};

export default ChooseDate;
