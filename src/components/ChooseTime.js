import { Radio, Space } from 'antd';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

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
      <Row className="chooseTimeContainer mt-4 mx-2">
        <h4 className="sectionTitle">انتخاب روز</h4>
        <hr />
        {possibleTimes !== null && possibleTimes.length !== 0 ? (
          <Radio.Group
            onChange={(e) => {
              radioOnChange(e);
              setSelectedTime(possibleTimes[e.target.value]);
            }}
            value={value}
          >
            <Space direction="vertical" className="timeOptions">
              {possibleTimes.map((time, index) => {
                return (
                  <Radio key={Math.random()} value={index} defaultChecked={false}>
                    {time.startTime.split(' ')[1] + ' الی ' + time.endTime.split(' ')[1]}
                  </Radio>
                );
              })}
            </Space>
          </Radio.Group>
        ) : possibleTimes === null ? (
          <h4 className="timeOptionText">
            برای نمایش لیست زمان های موجود روی نمایش زمان ها کلیک کنید
          </h4>
        ) : (
          <h4 className="timeOptionText">برای آرایشگر مورد نظر زمانی یافت نشد</h4>
        )}
      </Row>
    </>
  );
};

export default ChooseTime;
