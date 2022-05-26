import {
  FACILITY_CREATE_FAIL,
  FACILITY_CREATE_REQUEST,
  FACILITY_CREATE_SUCCESS,
  FACILITY_DETAIL_FAIL,
  FACILITY_DETAIL_REQUEST,
  FACILITY_DETAIL_SUCCESS,
  FACILITY_LIST_FAIL,
  FACILITY_LIST_REQUEST,
  FACILITY_LIST_SUCCESS,
  FACILITY_NAMES_FAIL,
  FACILITY_NAMES_REQUEST,
  FACILITY_NAMES_SUCCESS,
  MALE_FACILITY_LIST_REQUEST,
  MALE_FACILITY_LIST_SUCCESS,
  MALE_FACILITY_LIST_FAIL,
  FEMALE_FACILITY_LIST_REQUEST,
  FEMALE_FACILITY_LIST_SUCCESS,
  FEMALE_FACILITY_LIST_FAIL,
  FACILITY_EMPLOYEE_LIST_REQUEST,
  FACILITY_EMPLOYEE_LIST_SUCCESS,
  FACILITY_EMPLOYEE_LIST_FAIL,
  FACILITY_BARBER_LIST_REQUEST,
  FACILITY_BARBER_LIST_SUCCESS,
  FACILITY_BARBER_LIST_FAIL,
} from "../constants/facilityConstants";
import axios from "axios";
import { facility, user } from "../config";

export const getFacilityDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: FACILITY_DETAIL_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${facility}/getFacility/${id}`, config);
    dispatch({ type: FACILITY_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FACILITY_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAllFacilities = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FACILITY_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${facility}/allfacilities`, config);
    dispatch({ type: FACILITY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FACILITY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getFacilitysEmployees = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FACILITY_EMPLOYEE_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${user}/allEmployeesInfacility`, config);
    dispatch({ type: FACILITY_EMPLOYEE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FACILITY_EMPLOYEE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getFacilitysBarbers = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: FACILITY_BARBER_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `${user}/allbarbersInfacility/${id}`,
      config
    );
    dispatch({ type: FACILITY_BARBER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FACILITY_BARBER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMaleFacilities = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MALE_FACILITY_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${facility}/allMalefacilities`, config);

    dispatch({
      type: MALE_FACILITY_LIST_SUCCESS,
      payload: data ? data : [],
    });
  } catch (error) {
    dispatch({
      type: MALE_FACILITY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getFemaleFacilities = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FEMALE_FACILITY_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${facility}/allFemalefacilities`, config);
    dispatch({
      type: FEMALE_FACILITY_LIST_SUCCESS,
      payload: data ? data : [],
    });
  } catch (error) {
    dispatch({
      type: FEMALE_FACILITY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getFacilitiesNames = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FACILITY_NAMES_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`/api/facilities/name`, config);
    dispatch({ type: FACILITY_NAMES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FACILITY_NAMES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createFacility = (facility) => async (dispatch, getState) => {
  try {
    dispatch({ type: FACILITY_CREATE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`/api/facilities`, facility, config);
    dispatch({ type: FACILITY_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FACILITY_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
