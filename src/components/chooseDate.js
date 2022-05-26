import React from "react";
import { Col, Row } from "react-bootstrap";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
const ChooseDate = ({ selectedDay, setSelectedDay }) => {
  return (
    <>
      <Row className="defaultContainer mt-4">
        <Col className="datePickerContainer mx-4">
          <h4>انتخاب روز نوبت</h4>
          <DatePicker
            value={selectedDay}
            placeholder="sdf"
            onChange={setSelectedDay}
            shouldHighlightWeekends
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
                    setSelectedDay(null);
                  }}
                  className="btn"
                >
                  پاک کردن
                </button>
              </div>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default ChooseDate;
