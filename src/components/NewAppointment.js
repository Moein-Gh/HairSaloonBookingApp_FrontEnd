import { Steps, Button, message } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.min.css";
import { Row } from "react-bootstrap";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import ChooseFacility from "./ChooseFacility";
import ChooseBarber from "./ChooseBarber";
import { useSelector } from "react-redux";
import ChooseService from "./ChooseServices";
import ChooseDateAndTime from "./ChooseDateAndTime";

const { Step } = Steps;

const defaultValue = utils("fa").getToday();

const NewAppointment = () => {
  const [current, setCurrent] = useState(0);
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  const [serviceList, setServiceList] = useState([]);

  // USESELECTORS
  const NAFacilityInfo = useSelector((state) => {
    return state.NAFacilityInfo;
  });
  const { NAFacilityId } = NAFacilityInfo;

  const NABarberInfo = useSelector((state) => {
    return state.NABarberInfo;
  });
  const { NABarberId } = NABarberInfo;
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
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      ),
    },
    {
      title: "ثبت نوبت",
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
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
                : true
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
            onClick={() =>
              message.success("درخواست شما با موفقیت به آرایشگر فرستاده شد")
            }
          >
            ثبت درخواست
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            قبلی
          </Button>
        )}
      </div>
    </Row>
  );
};
export default NewAppointment;
