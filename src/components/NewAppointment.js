import { Steps, Button, message, Switch, Select } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.min.css";
import { Col, Row } from "react-bootstrap";
import BarberServicesTab from "./BarberServicesTab";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { utils } from "@hassanmojab/react-modern-calendar-datepicker";
import TimeOption from "./TimeOption";
import { Radio } from "antd";
import { Space } from "antd";
const times = [
  { startClock: 12, endClock: 13 },
  { startClock: 13, endClock: 14 },
  { startClock: 16, endClock: 17 },
  { startClock: 19, endClock: 20 },
];

const { Option } = Select;

const { Step } = Steps;

let services = [
  {
    title: "اصلاح بالای سر",
    duration: 15,
    price: 30000,
    id: 1,
  },
  {
    title: "اصلاح کنار سر",
    duration: 20,
    price: 15000,
    id: 2,
  },
  {
    title: "اصلاح سر کودک",
    duration: 25,
    price: 20000,
    id: 3,
  },
  {
    title: "اصلاح بالای سر",
    duration: 15,
    price: 30000,
    id: 4,
  },
  {
    title: "اصلاح کنار سر",
    duration: 20,
    price: 15000,
    id: 5,
  },
];

const getPriceSum = (services) => {
  let sum = 0;
  services.forEach((service) => {
    sum = sum + service.price;
  });
  return sum;
};

const getDurationSum = (services) => {
  let sum = 0;
  services.forEach((service) => {
    sum = sum + service.duration;
  });
  return sum;
};

const defaultValue = utils("fa").getToday();

const NewAppointment = () => {
  const [current, setCurrent] = useState(0);
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  const [favBarberShop, setFavBarberShop] = useState(true);
  const [value, setValue] = useState(true);

  const radioOnChange = (e) => {
    setValue(e.target.value);
  };

  function onSwitchChange(checked) {
    setFavBarberShop(checked);
  }

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  let favForm = (
    <>
      <Row>
        <Col>
          <Row className="selectFormContainer">
            {" "}
            <Select
              className="selectForm"
              showSearch
              placeholder="نام آرایشگاه را انتخاب کنید"
              optionFilterProp="children"
              onChange={onChange}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="0">هیچکدام</Option>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Row>

          <Row className="selectFormContainer">
            {" "}
            <Select
              className="selectForm"
              showSearch
              placeholder="نام آرایشگر را انتخاب کنید"
              optionFilterProp="children"
              onChange={onChange}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="0">هیچکدام</Option>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Row>
        </Col>
      </Row>
    </>
  );

  let barberShopForm = (
    <>
      <Row>
        <Col>
          <Row className="selectFormContainer">
            {" "}
            <Select
              className="selectForm"
              showSearch
              placeholder="نام آرایشگاه را انتخاب کنید"
              optionFilterProp="children"
              onChange={onChange}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="0">هیچکدام</Option>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Row>

          <Row className="selectFormContainer">
            {" "}
            <Select
              className="selectForm"
              showSearch
              placeholder="نام آرایشگر را انتخاب کنید"
              optionFilterProp="children"
              onChange={onChange}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="0">هیچکدام</Option>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Row>
        </Col>
      </Row>
    </>
  );

  const steps = [
    {
      title: "انتخاب آرایشگاه",
      content: (
        <Row className="formContainer">
          <Row className="my-2">
            <Col>
              <Switch defaultChecked onChange={onSwitchChange} />
              <label htmlFor="switch">
                &nbsp; انتخاب از بین آرایشگاه های موردعلاقه
              </label>
            </Col>
          </Row>
          <h5 className="mt-3">لطفا آرایشگاه و آرایشگر خود را انتخاب کنید</h5>
          {favBarberShop ? favForm : barberShopForm}
        </Row>
      ),
    },
    {
      title: "انتخاب خدمات",
      content: (
        <>
          <Row className="defaultContainer">
            <Col>
              <Row>
                <Col xs={8}>
                  <h5>خدمات انتخاب شده</h5>
                  {services.map((service) => {
                    return <h6 key={service.id}>{service.title}</h6>;
                  })}
                </Col>
                <Col xs={2}>
                  <h5>مدت زمان</h5>
                  {services.map((service) => {
                    return <h6 key={service.id}>{service.duration}</h6>;
                  })}
                </Col>
                <Col xs={2}>
                  <h5>مبلغ</h5>
                  {services.map((service) => {
                    return (
                      <h6 key={service.id}>
                        {service.price.toLocaleString()} تومان
                      </h6>
                    );
                  })}
                </Col>
              </Row>
              <hr />
              <Row>
                <Col xs={8}>
                  <h5>مجموع</h5>
                </Col>
                <Col xs={2}>
                  <h5>{getDurationSum(services)}</h5>
                </Col>
                <Col xs={2}>
                  <h5>{getPriceSum(services).toLocaleString()} تومان</h5>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="defaultContainer">
            <Row id="services" className=" mt-3">
              <BarberServicesTab />
            </Row>
          </Row>
        </>
      ),
    },
    {
      title: "انتخاب زمان",
      content: (
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
        </>
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
          <Button type="primary" onClick={() => next()}>
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
