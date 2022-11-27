import {
  GET_QUIZ_FAIL,
  GET_QUIZ_SUCCESS,
  POST_QUIZ_SUCCESS,
  POST_QUIZ_FAIL,
} from "../types/quizType";
import axios from "axios";

//get results
export const getResults = (data) => {
  return async (dispatch) => {
    const config = { headers: { "Content-Type": "application/json" } };

    try {
      const response = await axios.post(
        "https://quizr-razaul.herokuapp.com//api/results",
        data,
        config
      );

      dispatch({
        type: GET_QUIZ_SUCCESS,
        payload: {
          data: response.data.filter,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_QUIZ_FAIL,
        payload: { error: error.response.data.message },
      });
    }
  };
};

//get results
export const postResult = (data) => {
  return async (dispatch) => {
    const config = { headers: { "Content-Type": "application/json" } };

    try {
      const response = await axios.post(
        "https://quizr-razaul.herokuapp.com//api/post-result",
        data,
        config
      );

      dispatch({
        type: POST_QUIZ_SUCCESS,
        payload: {
          data: response.data.postResponse,
          message: "Stored in Database",
        },
      });
    } catch (error) {
      dispatch({
        type: POST_QUIZ_FAIL,
        payload: { error: error.response.data.message },
      });
    }
  };
};
