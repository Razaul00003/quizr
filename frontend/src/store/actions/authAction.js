import axios from "axios";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../types/authType";

export const userRegister = (data) => {
  return async (dispatch) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      console.log(data, typeof data);
      const response = await axios.post(
        "https://quizr-razaul.herokuapp.com//api/register",
        data,
        config
      );
      if (response.token) {
        localStorage.setItem("token", response.data.token);
      }

      dispatch({
        type: REGISTER_SUCCESS,
        payload: { token: response.data.token },
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error,
      });
    }
  };
};

//HANDLE LOGIN ACTION
export const userLogin = (data) => {
  return async (dispatch) => {
    const config = { headers: { "Content-Type": "application/json" } };

    try {
      const response = await axios.post(
        "https://quizr-razaul.herokuapp.com//api/login",
        data,
        config
      );
      if (response.token) {
        localStorage.setItem("token", response.data.token);
      }

      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          successMessage: response.data.successMessage,
          token: response.data.token,
        },
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: { error: error.response.data.error },
      });
    }
  };
};
