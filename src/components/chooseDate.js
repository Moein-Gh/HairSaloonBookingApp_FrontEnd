import DatePicker, { utils } from '@hassanmojab/react-modern-calendar-datepicker';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPossibleTimes } from '../actions/appointmentActions';
import { EMPTY_POSSIBLE_TIMES } from '../constants/appointmentConstants';
const ChooseDate = ({ selectedDay, setSelectedDay, serviceList, setSelectedTime }) => {
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
      <Row className="chooseDateContainer mt-4 mx-2">
        <h4 className="sectionTitle">انتخاب روز</h4>
        <hr />
        <Col className="datePickerContainer m-4">
          <DatePicker
            value={selectedDay}
            onChange={(e) => {
              dispatch({ type: EMPTY_POSSIBLE_TIMES });

              setSelectedTime({});
              setSelectedDay(e);
            }}
            shouldHighlightWeekends
            minimumDate={utils('fa').getToday()}
            locale="fa"
            renderFooter={() => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '1rem 2rem',
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
          <button className="showTimes" disabled={!selectedDay} onClick={PossibleTimesHandler}>
            نمایش زمان ها
          </button>
        </Col>
      </Row>
    </>
  );
};

export default ChooseDate;
