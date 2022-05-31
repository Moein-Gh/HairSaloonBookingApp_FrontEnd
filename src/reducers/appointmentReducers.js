import {
  APPOINTMENT_DETAIL_REQUEST,
  APPOINTMENT_DETAIL_SUCCESS,
  APPOINTMENT_DETAIL_FAIL,
  APPOINTMENT_LIST_REQUEST,
  APPOINTMENT_LIST_SUCCESS,
  APPOINTMENT_LIST_FAIL,
  NEW_APPOINTMENT_DATE_INFO,
  NEW_APPOINTMENT_SERVICES_INFO,
  NEW_APPOINTMENT_BARBER_INFO,
  NEW_APPOINTMENT_FACILITY_INFO,
  NEW_APPOINTMENT_TIME_INFO,
  EMPTY_NEW_APPOINTMENT_FACILITY_INFO,
  EMPTY_NEW_APPOINTMENT_BARBER_INFO,
  EMPTY_NEW_APPOINTMENT_SERVICES_INFO,
  EMPTY_NEW_APPOINTMENT_DATE_INFO,
  EMPTY_NEW_APPOINTMENT_TIME_INFO,
  ADD_APPOINTMENT_SERVICES_INFO,
  REMOVE_APPOINTMENT_SERVICES_INFO,
  POSSIBLE_TIMES_REQUEST,
  POSSIBLE_TIMES_SUCCESS,
  POSSIBLE_TIMES_FAIL,
  EMPTY_POSSIBLE_TIMES,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAIL,
} from "../constants/appointmentConstants.js";

export const appointmentDetailReducer = (
  state = { appointment: {} },
  action
) => {
  switch (action.type) {
    case APPOINTMENT_DETAIL_REQUEST:
      return { loading: true, appointment: {} };
    case APPOINTMENT_DETAIL_SUCCESS:
      return { loading: false, appointment: action.payload };
    case APPOINTMENT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const possibleTimesReducer = (state = { possibleTimes: [] }, action) => {
  switch (action.type) {
    case POSSIBLE_TIMES_REQUEST:
      return { loading: true, possibleTimes: [] };
    case POSSIBLE_TIMES_SUCCESS:
      return { loading: false, possibleTimes: action.payload };
    case POSSIBLE_TIMES_FAIL:
      return { loading: false, error: action.payload };
    case EMPTY_POSSIBLE_TIMES:
      return { loading: false, possibleTimes: [] };
    default:
      return state;
  }
};

export const appointmentListReducer = (
  state = { appointments: [] },
  action
) => {
  switch (action.type) {
    case APPOINTMENT_LIST_REQUEST:
      return { loading: true, appointments: [] };
    case APPOINTMENT_LIST_SUCCESS:
      return { loading: false, appointments: action.payload };
    case APPOINTMENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
// NA => new appointment
export const NAFacilityInfoReducer = (state = { NAFacilityId: "" }, action) => {
  switch (action.type) {
    case NEW_APPOINTMENT_FACILITY_INFO:
      return { NAFacilityId: action.facilityId };
    case EMPTY_NEW_APPOINTMENT_FACILITY_INFO:
      return { NAFacilityId: "" };

    default:
      return state;
  }
};

export const NABarberInfoReducer = (state = { NABarberId: "" }, action) => {
  switch (action.type) {
    case NEW_APPOINTMENT_BARBER_INFO:
      return { NABarberId: action.barberId };
    case EMPTY_NEW_APPOINTMENT_BARBER_INFO:
      return { NABarberId: "" };
    default:
      return state;
  }
};

export const createAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT_REQUEST:
      return { loading: true };
    case CREATE_APPOINTMENT_SUCCESS:
      return { loading: false, message: action.payload };
    case CREATE_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
