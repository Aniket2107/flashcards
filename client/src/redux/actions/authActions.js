import axios from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

//API
import { API } from "../../backend";

//User  data
export const loadUser = (dispatch = Function, getState = Function) => {
  dispatch({ type: USER_LOADING });

  axios.get(`${API}auth/user`, tokenConfig(getState)).then((res) => {
    if (!res.data.Success) {
      dispatch({ type: AUTH_ERROR, payload: res.data.msg });
      return;
    }
    dispatch({ type: USER_LOADED, payload: res.data.data });
  });
};

//Register user
export const register = (data) => (dispatch) => {
  axios
    .post(`${API}register`, data)
    .then((res) => {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    });
};

//Login
export const login = (data) => (dispatch) => {
  axios
    .post(`${API}login`, data)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    });
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const tokenConfig = (getState = Function) => {
  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};
