import {
  POSSIBLE_TIMES_REQUEST,
  POSSIBLE_TIMES_SUCCESS,
  POSSIBLE_TIMES_FAIL,
  EMPTY_POSSIBLE_TIMES,
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
