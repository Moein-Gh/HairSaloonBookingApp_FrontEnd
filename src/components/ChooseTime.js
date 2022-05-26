import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { Radio } from "antd";
import { Space } from "antd";

const ChooseTime = () => {
  const times = [
    { startClock: 12, endClock: 13 },
    { startClock: 13, endClock: 14 },
    { startClock: 16, endClock: 17 },
    { startClock: 19, endClock: 20 },
  ];

  const [value, setValue] = useState(true);

  const radioOnChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Row className="defaultContainer mt-4">
      <h5>زمان های موجود</h5>
      <Radio.Group
        onChange={(e) => {
          radioOnChange(e);
        }}
        value={value}
      >
        <Space direction="vertical">
          {times.map((time, index) => {
            return (
              <Radio key={Math.random()} value={index}>
                {time.startClock + "-" + time.endClock}
              </Radio>
            );
          })}
        </Space>
      </Radio.Group>
    </Row>
  );
};

export default ChooseTime;
