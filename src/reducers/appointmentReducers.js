import {
  APPOINTMENT_DETAIL_REQUEST,
  APPOINTMENT_DETAIL_SUCCESS,
  APPOINTMENT_DETAIL_FAIL,
  NEW_APPOINTMENT_BARBER_INFO,
  NEW_APPOINTMENT_FACILITY_INFO,
  EMPTY_NEW_APPOINTMENT_FACILITY_INFO,
  EMPTY_NEW_APPOINTMENT_BARBER_INFO,
  POSSIBLE_TIMES_REQUEST,
  POSSIBLE_TIMES_SUCCESS,
  POSSIBLE_TIMES_FAIL,
  EMPTY_POSSIBLE_TIMES,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAIL,
  EMPTY_NEW_APPOINTMENT,
  APPOINTMENT_TODAY_BARBER_REQUEST,
  APPOINTMENT_TODAY_BARBER_SUCCESS,
  APPOINTMENT_TODAY_BARBER_FAIL,
  APPOINTMENT_SUBMITTED_USER_REQUEST,
  APPOINTMENT_SUBMITTED_USER_SUCCESS,
  APPOINTMENT_SUBMITTED_USER_FAIL,
  APPROVE_APPOINTMENT_REQUEST,
  APPROVE_APPOINTMENT_SUCCESS,
  APPROVE_APPOINTMENT_FAIL,
  REJECT_APPOINTMENT_REQUEST,
  REJECT_APPOINTMENT_SUCCESS,
  REJECT_APPOINTMENT_FAIL,
  APPOINTMENT_USER_LIST_REQUEST,
  APPOINTMENT_USER_LIST_SUCCESS,
  APPOINTMENT_USER_LIST_FAIL,
  APPOINTMENT_BARBER_LIST_REQUEST,
  APPOINTMENT_BARBER_LIST_SUCCESS,
  APPOINTMENT_BARBER_LIST_FAIL,
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

export const possibleTimesReducer = (
  state = { possibleTimes: null },
  action
) => {
  switch (action.type) {
    case POSSIBLE_TIMES_REQUEST:
      return { loading: true, possibleTimes: [] };
    case POSSIBLE_TIMES_SUCCESS:
      return { loading: false, possibleTimes: action.payload };
    case POSSIBLE_TIMES_FAIL:
      return { loading: false, error: action.payload };
    case EMPTY_POSSIBLE_TIMES:
      return { loading: false, possibleTimes: null };
    default:
      return state;
  }
};

export const appointmentTodayListForBarberReducer = (
  state = { appointments: [] },
  action
) => {
  switch (action.type) {
    case APPOINTMENT_TODAY_BARBER_REQUEST:
      return { loading: true, appointments: [] };
    case APPOINTMENT_TODAY_BARBER_SUCCESS:
      return { loading: false, appointments: action.payload };
    case APPOINTMENT_TODAY_BARBER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const approveAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case APPROVE_APPOINTMENT_REQUEST:
      return { loading: true };
    case APPROVE_APPOINTMENT_SUCCESS:
      return {
        loading: false,
        message: "appointment Approved",
        reset: Math.random(),
      };
    case APPROVE_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const rejectAppointmentReducer = (state = {}, action) => {
  switch (action.type) {
    case REJECT_APPOINTMENT_REQUEST:
      return { loading: true };
    case REJECT_APPOINTMENT_SUCCESS:
      return {
        loading: false,
        message: "appointment rejected",
        reset: Math.random(),
      };
    case REJECT_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const appointmentSubmittedListReducer = (
  state = { appointments: [] },
  action
) => {
  switch (action.type) {
    case APPOINTMENT_SUBMITTED_USER_REQUEST:
      return { loading: true, appointments: [] };
    case APPOINTMENT_SUBMITTED_USER_SUCCESS:
      return { loading: false, appointments: action.payload };
    case APPOINTMENT_SUBMITTED_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const appointmentUserListReducer = (
  state = { appointments: [] },
  action
) => {
  switch (action.type) {
    case APPOINTMENT_USER_LIST_REQUEST:
      return { loading: true, appointments: [] };
    case APPOINTMENT_USER_LIST_SUCCESS:
      return { loading: false, appointments: action.payload };
    case APPOINTMENT_USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const appointmentBarberListReducer = (
  state = { appointments: [] },
  action
) => {
  switch (action.type) {
    case APPOINTMENT_BARBER_LIST_REQUEST:
      return { loading: true, appointments: [] };
    case APPOINTMENT_BARBER_LIST_SUCCESS:
      return { loading: false, appointments: action.payload };
    case APPOINTMENT_BARBER_LIST_FAIL:
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
    case EMPTY_NEW_APPOINTMENT:
      return {};
    default:
      return state;
  }
};
