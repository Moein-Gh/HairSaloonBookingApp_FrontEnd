import {
  POSSIBLE_TIMES_REQUEST,
  POSSIBLE_TIMES_SUCCESS,
  POSSIBLE_TIMES_FAIL,
  EMPTY_POSSIBLE_TIMES,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAIL,
} from "../constants/appointmentConstants.js";
import axios from "axios";
import { appointment } from "../config";

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
  ({ NAFacilityId, NABarberId, serviceList, selectedDay, selectedTime }) =>
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
          NAFacilityId,
          NABarberId,
          serviceList,
          selectedDay,
          selectedTime,
          userId: userInfo && userInfo._id,
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
