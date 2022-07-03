import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ChooseDate from './chooseDate';
import ChooseTime from './ChooseTime';

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
      <Row>
        <Col md={'6'}>
          <ChooseDate
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            serviceList={serviceList}
            setSelectedTime={setSelectedTime}
          />
        </Col>
        <Col md={'6'}>
          <ChooseTime
            possibleTimes={times}
            selectedDay={selectedDay}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        </Col>
      </Row>
    </>
  );
};

export default ChooseDateAndTime;
