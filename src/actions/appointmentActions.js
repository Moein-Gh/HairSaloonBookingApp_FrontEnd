import {
  POSSIBLE_TIMES_REQUEST,
  POSSIBLE_TIMES_SUCCESS,
  POSSIBLE_TIMES_FAIL,
  EMPTY_POSSIBLE_TIMES,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAIL,
  APPOINTMENT_TODAY_BARBER_REQUEST,
  APPOINTMENT_TODAY_BARBER_SUCCESS,
  APPOINTMENT_TODAY_BARBER_FAIL,
  APPOINTMENT_SUBMITTED_USER_REQUEST,
  APPOINTMENT_SUBMITTED_USER_SUCCESS,
  APPOINTMENT_SUBMITTED_USER_FAIL,
  APPOINTMENT_DETAIL_REQUEST,
  APPOINTMENT_DETAIL_SUCCESS,
  APPOINTMENT_DETAIL_FAIL,
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
import axios from "axios";
import { appointment } from "../config";

export const getBarbersAppointmentsForToday =
  () => async (dispatch, getState) => {
    try {
      dispatch({ type: APPOINTMENT_TODAY_BARBER_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `${appointment}/todaysAppointmentsForBarber`,
        {},
        config
      );
      dispatch({ type: APPOINTMENT_TODAY_BARBER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: APPOINTMENT_TODAY_BARBER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getUserAppointments = () => async (dispatch, getState) => {
  try {
    dispatch({ type: APPOINTMENT_USER_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `${appointment}/allAppointmentsForUser`,
      config
    );
    dispatch({ type: APPOINTMENT_USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: APPOINTMENT_USER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getBarberAppointments = () => async (dispatch, getState) => {
  try {
    dispatch({ type: APPOINTMENT_BARBER_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `${appointment}/allAppointmentsForUser`,
      config
    );
    dispatch({ type: APPOINTMENT_BARBER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: APPOINTMENT_BARBER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUsersSubmittedAppointments =
  () => async (dispatch, getState) => {
    try {
      dispatch({ type: APPOINTMENT_SUBMITTED_USER_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `${appointment}/submittedAppointmentsForBarber`,
        {},
        config
      );
      dispatch({ type: APPOINTMENT_SUBMITTED_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: APPOINTMENT_SUBMITTED_USER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getAppointmentDetail = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: APPOINTMENT_DETAIL_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `${appointment}/getAppointment/${id}`,
      config
    );
    dispatch({ type: APPOINTMENT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: APPOINTMENT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const approveAppointment = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: APPROVE_APPOINTMENT_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.patch(
      `${appointment}/editAppointment/${id}`,
      {
        status: "approved",
      },
      config
    );
    dispatch({ type: APPROVE_APPOINTMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: APPROVE_APPOINTMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const rejectAppointment = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: REJECT_APPOINTMENT_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.patch(
      `${appointment}/editAppointment/${id}`,
      {
        status: "rejected",
      },
      config
    );
    dispatch({ type: REJECT_APPOINTMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REJECT_APPOINTMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPossibleTimes =
  ({ date, duration, NABarberId }) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: POSSIBLE_TIMES_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `${appointment}/getPossibleTime/${NABarberId}`,
        { date, duration },
        config
      );
      dispatch({ type: POSSIBLE_TIMES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: POSSIBLE_TIMES_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const createNewAppointment =
  ({ NABarberId, serviceList, selectedDay, selectedTime }) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_APPOINTMENT_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        `${appointment}/newAppointment`,
        {
          NABarberId,
          serviceList,
          selectedTime,
        },
        config
      );
      dispatch({ type: CREATE_APPOINTMENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_APPOINTMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
