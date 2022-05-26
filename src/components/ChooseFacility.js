import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllFacilities } from "../actions/facilityActions";
import {
  EMPTY_NEW_APPOINTMENT_BARBER_INFO,
  EMPTY_NEW_APPOINTMENT_FACILITY_INFO,
  NEW_APPOINTMENT_FACILITY_INFO,
} from "../constants/appointmentConstants";
const { Option } = Select;

const ChooseFacility = () => {
  const dispatch = useDispatch();
  function onChange(value) {
    if (value !== "0") {
      dispatch({ type: NEW_APPOINTMENT_FACILITY_INFO, facilityId: value });
      dispatch({ type: EMPTY_NEW_APPOINTMENT_BARBER_INFO });
    } else {
      {
        dispatch({ type: EMPTY_NEW_APPOINTMENT_FACILITY_INFO });
        dispatch({ type: EMPTY_NEW_APPOINTMENT_BARBER_INFO });
      }
    }
  }

  const facilityList = useSelector((state) => {
    return state.facilityList;
  });
  const { facilities, loading, error } = facilityList;

  useEffect(() => {
    dispatch(getAllFacilities());
  }, [dispatch]);

  return (
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
                option.children.indexOf(input) >= 0
              }
            >
              {facilities ? (
                <>
                  <Option value="0">هیچکدام</Option>
                  {facilities &&
                    facilities.map((facility) => {
                      let optionName = `آرایشگاه ${
                        facility.customerGender === "male" ? "مردانه" : "زنانه"
                      } ${facility.name} -- به مدیریت ${
                        facility.manager.name
                      } -- کد : ${facility.code}`;
                      return (
                        <Option key={facility._id} value={facility._id}>
                          {optionName}
                        </Option>
                      );
                    })}
                </>
              ) : (
                <Option value="0">هیچکدام</Option>
              )}
            </Select>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ChooseFacility;
