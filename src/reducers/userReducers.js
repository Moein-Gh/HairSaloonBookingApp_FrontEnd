import {
  ADD_BARBER_FAIL,
  ADD_BARBER_REQUEST,
  ADD_BARBER_RESET,
  ADD_BARBER_SUCCESS,
  EMPTY_SELECT_BARBER,
  NORMAL_USER_LIST_FAIL,
  NORMAL_USER_LIST_REQUEST,
  NORMAL_USER_LIST_SUCCESS,
  REMOVE_BARBER_FAIL,
  REMOVE_BARBER_REQUEST,
  REMOVE_BARBER_RESET,
  REMOVE_BARBER_SUCCESS,
  SELECT_BARBER,
  USER_DETAIL_FAIL,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_NAMES_FAIL,
  USER_NAMES_REQUEST,
  USER_NAMES_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants.js";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userDetailReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAIL_REQUEST:
      return { loading: true };
    case USER_DETAIL_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, userList: action.payload };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const normalUserListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case NORMAL_USER_LIST_REQUEST:
      return { loading: true };
    case NORMAL_USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case NORMAL_USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const usersNamesReducer = (state = { names: [] }, action) => {
  switch (action.type) {
    case USER_NAMES_REQUEST:
      return { loading: true };
    case USER_NAMES_SUCCESS:
      return { loading: false, usersNames: action.payload };
    case USER_NAMES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const addBarberReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_BARBER_REQUEST:
      return { loading: true };
    case ADD_BARBER_SUCCESS:
      return { loading: false, message: action.payload, reset: Math.random() };
    case ADD_BARBER_FAIL:
      return { loading: false, error: action.payload };
    case ADD_BARBER_RESET:
      return {};
    default:
      return state;
  }
};
export const removeBarberReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_BARBER_REQUEST:
      return { loading: true };
    case REMOVE_BARBER_SUCCESS:
      return { loading: false, message: action.payload, reset: Math.random() };
    case REMOVE_BARBER_FAIL:
      return { loading: false, error: action.payload };
    case REMOVE_BARBER_RESET:
      return {};
    default:
      return state;
  }
};

export const selectBarber = (state = { id: "" }, action) => {
  switch (action.type) {
    case SELECT_BARBER:
      return {
        id: action.id,
        facilityId: action.facilityId,
        reset: Math.random(),
      };
    case EMPTY_SELECT_BARBER:
      return {
        id: "",
        facilityId: action.facilityId,
        reset: Math.random(),
      };
    default:
      return state;
  }
};
