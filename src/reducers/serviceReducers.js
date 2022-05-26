import {
  SERVICE_USER_REQUEST,
  SERVICE_USER_SUCCESS,
  SERVICE_USER_FAIL,
  SERVICE_NABARBER_REQUEST,
  SERVICE_NABARBER_SUCCESS,
  SERVICE_NABARBER_FAIL,
  DELETE_SERVICE_FAIL,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_SUCCESS,
  CREATE_SERVICE_FAIL,
  CREATE_SERVICE_REQUEST,
  CREATE_SERVICE_SUCCESS,
  SERVICE_BARBER_REQUEST,
  SERVICE_BARBER_SUCCESS,
  SERVICE_BARBER_FAIL,
  SET_EDIT_SERVICE_INFO,
  EMPTY_EDIT_SERVICE_INFO,
  EDIT_SERVICE_REQUEST,
  EDIT_SERVICE_SUCCESS,
  EDIT_SERVICE_FAIL,
} from "../constants/serviceConstants.js";

export const serviceUserReducer = (state = { services: [] }, action) => {
  switch (action.type) {
    case SERVICE_USER_REQUEST:
      return { loading: true, services: [] };
    case SERVICE_USER_SUCCESS:
      return { loading: false, services: action.payload };
    case SERVICE_USER_FAIL:
      return { loading: false, services: [], error: action.payload };
    default:
      return state;
  }
};
export const serviceNABarberReducer = (state = { services: [] }, action) => {
  switch (action.type) {
    case SERVICE_NABARBER_REQUEST:
      return { loading: true, services: [] };
    case SERVICE_NABARBER_SUCCESS:
      return { loading: false, services: action.payload };
    case SERVICE_NABARBER_FAIL:
      return { loading: false, services: [], error: action.payload };
    default:
      return state;
  }
};
export const serviceBarberReducer = (state = { services: [] }, action) => {
  switch (action.type) {
    case SERVICE_BARBER_REQUEST:
      return { loading: true, services: [] };
    case SERVICE_BARBER_SUCCESS:
      return { loading: false, services: action.payload };
    case SERVICE_BARBER_FAIL:
      return { loading: false, services: [], error: action.payload };
    default:
      return state;
  }
};

export const createServiceReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_SERVICE_REQUEST:
      return { loading: true };
    case CREATE_SERVICE_SUCCESS:
      return { loading: false, message: action.payload, reset: Math.random() };
    case CREATE_SERVICE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editServiceReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_SERVICE_REQUEST:
      return { loading: true };
    case EDIT_SERVICE_SUCCESS:
      return { loading: false, message: action.payload, reset: Math.random() };
    case EDIT_SERVICE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const deleteServiceReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SERVICE_REQUEST:
      return { loading: true };
    case DELETE_SERVICE_SUCCESS:
      return { loading: false, message: action.payload, reset: Math.random() };
    case DELETE_SERVICE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editServiceInfoReducer = (state = { service: {} }, action) => {
  switch (action.type) {
    case SET_EDIT_SERVICE_INFO:
      return { service: action.service, reset: Math.random() };
    case EMPTY_EDIT_SERVICE_INFO:
      return { service: {}, reset: Math.random() };
    default:
      return state;
  }
};
