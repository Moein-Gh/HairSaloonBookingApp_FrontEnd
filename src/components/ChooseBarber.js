import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getFacilitysBarbers } from "../actions/facilityActions";
import {
  EMPTY_NEW_APPOINTMENT_BARBER_INFO,
  EMPTY_NEW_APPOINTMENT_FACILITY_INFO,
  NEW_APPOINTMENT_BARBER_INFO,
  NEW_APPOINTMENT_FACILITY_INFO,
} from "../constants/appointmentConstants";
const { Option } = Select;

const ChooseBarber = () => {
  const dispatch = useDispatch();
  function onChange(value) {
    if (value !== "0") {
      dispatch({ type: NEW_APPOINTMENT_BARBER_INFO, barberId: value });
    } else {
      {
        dispatch({ type: EMPTY_NEW_APPOINTMENT_BARBER_INFO });
      }
    }
  }

  const facilityBarbers = useSelector((state) => {
    return state.facilityBarbers;
  });
  const { barbers, loading, error } = facilityBarbers;

  const NAFacilityInfo = useSelector((state) => {
    return state.NAFacilityInfo;
  });
  const { NAFacilityId } = NAFacilityInfo;

  useEffect(() => {
    if (NAFacilityId) {
      dispatch(getFacilitysBarbers(NAFacilityId));
    }
  }, [dispatch, NAFacilityId]);

  return (
    <>
      {NAFacilityId && (
        <Row>
          <Col>
            <Row className="selectFormContainer">
              {" "}
              <Select
                key={NAFacilityId}
                className="selectForm"
                showSearch
                placeholder="نام آرایشگر مورد نظر خود را انتخاب کنید"
                optionFilterProp="children"
                allowClear
                onChange={onChange}
                filterOption={(input, option) =>
                  option.children.indexOf(input) >= 0
                }
              >
                {barbers ? (
                  <>
                    <Option value="0">هیچکدام</Option>
                    {barbers &&
                      barbers.map((barber) => {
                        let optionName = barber.name;
                        return (
                          <Option key={barber._id} value={barber._id}>
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
      )}
    </>
  );
};

export default ChooseBarber;
