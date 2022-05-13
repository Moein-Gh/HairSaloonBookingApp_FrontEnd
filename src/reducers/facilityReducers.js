import {
  FACILITY_DETAIL_REQUEST,
  FACILITY_DETAIL_SUCCESS,
  FACILITY_DETAIL_FAIL,
  FACILITY_LIST_REQUEST,
  FACILITY_LIST_SUCCESS,
  FACILITY_LIST_FAIL,
  MALE_FACILITY_LIST_REQUEST,
  MALE_FACILITY_LIST_SUCCESS,
  MALE_FACILITY_LIST_FAIL,
  FEMALE_FACILITY_LIST_REQUEST,
  FEMALE_FACILITY_LIST_SUCCESS,
  FEMALE_FACILITY_LIST_FAIL,
  FACILITY_EMPLOYEE_LIST_REQUEST,
  FACILITY_EMPLOYEE_LIST_SUCCESS,
  FACILITY_EMPLOYEE_LIST_FAIL,
} from "../constants/facilityConstants.js";

export const facilityDetailReducer = (state = { facility: {} }, action) => {
  switch (action.type) {
    case FACILITY_DETAIL_REQUEST:
      return { loading: true };
    case FACILITY_DETAIL_SUCCESS:
      return { loading: false, facility: action.payload };
    case FACILITY_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const facilityEmployeesReducer = (state = { employees: {} }, action) => {
  switch (action.type) {
    case FACILITY_EMPLOYEE_LIST_REQUEST:
      return { loading: true };
    case FACILITY_EMPLOYEE_LIST_SUCCESS:
      return { loading: false, employees: action.payload };
    case FACILITY_EMPLOYEE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const facilityListReducer = (state = { facilities: [] }, action) => {
  switch (action.type) {
    case FACILITY_LIST_REQUEST:
      return { loading: true };
    case FACILITY_LIST_SUCCESS:
      return { loading: false, facilityList: action.payload };
    case FACILITY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const maleFacilityListReducer = (state = { facilities: [] }, action) => {
  switch (action.type) {
    case MALE_FACILITY_LIST_REQUEST:
      return { loading: true };
    case MALE_FACILITY_LIST_SUCCESS:
      return { loading: false, facilities: action.payload };
    case MALE_FACILITY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const femaleFacilityListReducer = (
  state = { facilities: [] },
  action
) => {
  switch (action.type) {
    case FEMALE_FACILITY_LIST_REQUEST:
      return { loading: true };
    case FEMALE_FACILITY_LIST_SUCCESS:
      return { loading: false, facilities: action.payload };
    case FEMALE_FACILITY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
