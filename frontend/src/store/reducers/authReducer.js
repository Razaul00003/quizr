import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../types/authType";
import decodeToken from "jwt-decode";
const authState = {
  authenticate: false,
  successMessage: "",
  error: "",
  myInfo: "",
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
    authState.myInfo = getInfo;
    authState.authenticate = true;
  }
}

//REDUCER TO CHANGE STATE
export const authReducer = (state = authState, action) => {
  const { payload, type } = action;

  if (type === REGISTER_SUCCESS) {
    const myInfo = tokenDecode(payload.token);
    return {
      ...state,
      error: "",
      authenticate: true,
      successMessage: "Successfully created Account",
      myInfo,
    };
  }
  if (type === REGISTER_FAIL) {
    return {
      ...state,
      authenticate: false,
      error: payload.error,
      myinfo: "",
    };
  }
  if (type === LOGIN_SUCCESS) {
    const myInfo = tokenDecode(payload.token);
    return {
      ...state,
      authenticate: true,
      error: "",
      successMessage: payload.successMessage,
      myInfo,
    };
  }
  if (type === LOGIN_FAIL) {
    return {
      ...state,
      error: payload.error,
      authenticate: false,
      myInfo: "",
    };
  }
  if (type === LOGOUT) {
    return {
      ...state,
      authenticate: false,
      myInfo: "",
      successMessage: "Logout successful",
    };
  }
  return state;
};
