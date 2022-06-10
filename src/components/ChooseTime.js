import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Radio } from "antd";
import { Space } from "antd";

const ChooseTime = ({ possibleTimes, selectedDay, setSelectedTime }) => {
  const [value, setValue] = useState(true);

  const radioOnChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    setValue(true);
  }, [possibleTimes, selectedDay]);

  return (
    <>
      <Row className="defaultContainer mt-4">
        <h5>زمان های موجود</h5>
        {possibleTimes !== null && possibleTimes.length !== 0 ? (
          <Radio.Group
            onChange={(e) => {
              radioOnChange(e);
              setSelectedTime(possibleTimes[e.target.value]);
            }}
            value={value}
          >
            <Space direction="vertical">
              {possibleTimes.map((time, index) => {
                return (
                  <Radio
                    key={Math.random()}
                    value={index}
                    defaultChecked={false}
                  >
                    {time.startTime.split(" ")[1] +
                      " الی " +
                      time.endTime.split(" ")[1]}
                  </Radio>
                );
              })}
            </Space>
          </Radio.Group>
        ) : possibleTimes === null ? (
          <h4>برای نمایش لیست زمان های موجود روی گرفتن زمان ها کلیک کنید</h4>
        ) : (
          <h4>برای آرایشگر مورد نظر زمانی یافت نشد</h4>
        )}
      </Row>
    </>
  );
};

export default ChooseTime;
