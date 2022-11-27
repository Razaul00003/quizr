import decodeToken from "jwt-decode";
import {
  GET_QUIZ_SUCCESS,
  GET_QUIZ_FAIL,
  POST_QUIZ_FAIL,
  POST_QUIZ_SUCCESS,
} from "../types/quizType";

const quizState = {
  results: [],
  message: "",
  userName: "",
};
const tokenDecode = (token) => {
  const tokenDecoded = decodeToken(token);
  const expTime = new Date(tokenDecoded.exp * 1000);

  if (new Date() > expTime) {
    return null;
  }
  return tokenDecoded;
};

const getToken = localStorage.getItem("token");
if (getToken) {
  const getInfo = tokenDecode(getToken);
  if (getInfo) {
    quizState.userName = getInfo.userName;
  }
}

export const quizReducer = (state = quizState, action) => {
  const { payload, type } = action;

  if (type === GET_QUIZ_SUCCESS) {
    return {
      ...state,
      results: payload.data,
    };
  }
  if (type === GET_QUIZ_FAIL) {
    return {
      ...state,
      result: "",
      message: payload.error,
    };
  }

  if (type === POST_QUIZ_SUCCESS) {
    return {
      ...state,
      message: payload.message,
    };
  }
  if (type === POST_QUIZ_FAIL) {
    return {
      ...state,
      message: payload.error,
    };
  }

  return state;
};
