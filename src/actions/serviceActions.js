import {
  SERVICE_USER_REQUEST,
  SERVICE_USER_SUCCESS,
  SERVICE_USER_FAIL,
  SERVICE_NABARBER_REQUEST,
  SERVICE_NABARBER_SUCCESS,
  SERVICE_NABARBER_FAIL,
  SERVICE_BARBER_REQUEST,
  SERVICE_BARBER_SUCCESS,
  SERVICE_BARBER_FAIL,
  DELETE_SERVICE_FAIL,
  DELETE_SERVICE_REQUEST,
  DELETE_SERVICE_SUCCESS,
  CREATE_SERVICE_REQUEST,
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_FAIL,
  EDIT_SERVICE_REQUEST,
  EDIT_SERVICE_SUCCESS,
  EDIT_SERVICE_FAIL,
  EMPTY_EDIT_SERVICE_INFO,
} from "../constants/serviceConstants";
import axios from "axios";
import { service } from "../config";

export const getUsersServices = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SERVICE_USER_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${service}/userservices`, config);
    dispatch({ type: SERVICE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SERVICE_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getNABarbersServices = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: SERVICE_NABARBER_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${service}/barberservices/${id}`, config);

    dispatch({ type: SERVICE_NABARBER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SERVICE_NABARBER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getServicesByUserId = (userId) => async (dispatch, getState) => {
  try {
    dispatch({ type: SERVICE_BARBER_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `${service}/barberservices/${userId}`,
      config
    );
    dispatch({ type: SERVICE_BARBER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SERVICE_BARBER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNewService = (serviceData) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_SERVICE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(
      `${service}/newService`,
      { ...serviceData, userId: userInfo && userInfo._id },
      config
    );
    dispatch({ type: CREATE_SERVICE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_SERVICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateService =
  (serviceId, serviceData) => async (dispatch, getState) => {
    try {
      dispatch({ type: EDIT_SERVICE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.patch(
        `${service}/editService/${serviceId}`,
        {
          title: serviceData.editTitle,
          categoryId: serviceData.editCategoryId,
          price: serviceData.editPrice,
          time: serviceData.editTime,
          userId: userInfo && userInfo._id,
        },
        config
      );
      dispatch({ type: EDIT_SERVICE_SUCCESS, payload: data });
      dispatch({ type: EMPTY_EDIT_SERVICE_INFO });
    } catch (error) {
      dispatch({
        type: EDIT_SERVICE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteService = (serviceId) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_SERVICE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.delete(
      `${service}/deleteService/${serviceId}`,
      config
    );
    dispatch({ type: DELETE_SERVICE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_SERVICE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
