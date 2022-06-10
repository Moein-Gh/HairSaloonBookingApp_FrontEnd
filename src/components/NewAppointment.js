import { Steps, Button, message } from "antd";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.min.css";
import { Row } from "react-bootstrap";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import ChooseFacility from "./ChooseFacility";
import ChooseBarber from "./ChooseBarber";
import { useDispatch, useSelector } from "react-redux";
import ChooseService from "./ChooseServices";
import ChooseDateAndTime from "./ChooseDateAndTime";
import {
  EMPTY_NEW_APPOINTMENT_FACILITY_INFO,
  EMPTY_NEW_APPOINTMENT_BARBER_INFO,
  EMPTY_POSSIBLE_TIMES,
  EMPTY_NEW_APPOINTMENT,
} from "../constants/appointmentConstants";
import NewAppointmentSummary from "./NewAppointmentSummary";
import { createNewAppointment } from "../actions/appointmentActions";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const { Step } = Steps;

const defaultValue = utils("fa").getToday();

const NewAppointment = () => {
  const [current, setCurrent] = useState(0);
  const [reset, setRest] = useState(false);
  const [createNew, setCreateNew] = useState(false);
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  const [selectedTime, setSelectedTime] = useState({});
  const [serviceList, setServiceList] = useState([]);
  const dispatch = useDispatch();
  // USESELECTORS
  const NAFacilityInfo = useSelector((state) => {
    return state.NAFacilityInfo;
  });
  const { NAFacilityId } = NAFacilityInfo;

  const NABarberInfo = useSelector((state) => {
    return state.NABarberInfo;
  });
  const { NABarberId } = NABarberInfo;

  const createAppointment = useSelector((state) => {
    return state.createAppointment;
  });
  const { loading, message: successMessage, error } = createAppointment;

  // -- USESELECTORS

  const steps = [
    {
      title: "انتخاب آرایشگاه",
      content: (
        <Row className="formContainer">
          <h5 className="mt-3">لطفا آرایشگاه و آرایشگر خود را انتخاب کنید</h5>
          <ChooseFacility />
          <ChooseBarber />
        </Row>
      ),
    },
    {
      title: "انتخاب خدمات",
      content: (
        <>
          <ChooseService
            serviceList={serviceList}
            setServiceList={setServiceList}
          />
        </>
      ),
    },
    {
      title: "انتخاب زمان",
      content: (
        <ChooseDateAndTime
          serviceList={serviceList}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      ),
    },
    {
      title: "ثبت نوبت",
      content: (
        <NewAppointmentSummary
          selectedDay={selectedDay}
          selectedTime={selectedTime}
          serviceList={serviceList}
          NAFacilityId={NAFacilityId}
          NABarberId={NABarberId}
        />
      ),
    },
  ];

  // if (successMessage && current === steps.length - 1) {
  //   message.success("درخواست شما با موفقیت به آرایشگر فرستاده شد");
  // }
  if (error && current === steps.length - 1) {
    message.error("لطفا دوباره تلاش فرمایید");
  }
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  useEffect(() => {
    dispatch({ type: EMPTY_POSSIBLE_TIMES });
    dispatch({ type: EMPTY_NEW_APPOINTMENT });
    dispatch({ type: EMPTY_NEW_APPOINTMENT_FACILITY_INFO });
    dispatch({ type: EMPTY_NEW_APPOINTMENT_BARBER_INFO });
  }, [reset]);

  return (
    <>
      {!createNew && !successMessage ? (
        <Row className="defaultContainer">
          <Steps current={current}>
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action mt-5">
            {current < steps.length - 1 && (
              <Button
                disabled={
                  current === 0
                    ? NAFacilityId && NABarberId
                      ? false
                      : true
                    : current === 1
                    ? serviceList.length === 0
                      ? true
                      : false
                    : current === 2
                    ? selectedTime.startTime
                      ? false
                      : true
                    : false
                }
                type="primary"
                onClick={() => next()}
              >
                بعدی
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => {
                  dispatch(
                    createNewAppointment({
                      NABarberId,
                      serviceList: serviceList.map((service) => {
                        return service._id;
                      }),
                      selectedTime,
                    })
                  );
                  setCreateNew(true);
                  dispatch({ type: EMPTY_NEW_APPOINTMENT_FACILITY_INFO });
                  dispatch({ type: EMPTY_NEW_APPOINTMENT_BARBER_INFO });
                }}
              >
                ثبت درخواست
              </Button>
            )}
            {current > 0 && (
              <Button
                style={{ margin: "0 8px" }}
                onClick={() => {
                  if (current === 1) {
                    dispatch({ type: EMPTY_NEW_APPOINTMENT_BARBER_INFO });
                    dispatch({ type: EMPTY_NEW_APPOINTMENT_FACILITY_INFO });
                    prev();
                  } else if (current === 2) {
                    setServiceList([]);
                    dispatch({ type: EMPTY_POSSIBLE_TIMES });
                    setSelectedTime({});
                    prev();
                  } else if (current === 3) {
                    dispatch({ type: EMPTY_POSSIBLE_TIMES });
                    setSelectedTime({});
                    setSelectedDay(defaultValue);
                    prev();
                  } else {
                    prev();
                  }
                }}
              >
                قبلی
              </Button>
            )}
          </div>
        </Row>
      ) : (
        <>
          <Row className="defaultContainer">
            <Col>
              <h3>نوبت با موفقیت به آرایشگر فرستاده شد</h3>
            </Col>
            <Row className="defaultContainer">
              <Link to={"/"} className="btn">
                {" "}
                صفحه اصلی
              </Link>
            </Row>
          </Row>
        </>
      )}
    </>
  );
};
export default NewAppointment;
