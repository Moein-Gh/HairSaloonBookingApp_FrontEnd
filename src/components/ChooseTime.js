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
    console.log("text");
  }, [possibleTimes]);

  return (
    <>
      {possibleTimes.length !== 0 && (
        <Row className="defaultContainer mt-4">
          <h5>زمان های موجود</h5>
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
        </Row>
      )}
    </>
  );
};

export default ChooseTime;
