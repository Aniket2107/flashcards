import axios from "axios";
import { API } from "../../backend";
import { tokenConfig } from "./authActions";
import { CORRECT, WRONG } from "./types";

export const right = (data) => (dispatch, getState) => {
  let body = {
    boxId: setright(data),
  };
  axios
    .put(`${API}card/update/${data._id}`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: CORRECT, payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const wrong = (data) => (dispatch, getState) => {
  let body = {
    boxId: setwrong(data),
  };
  axios
    .put(`${API}card/update/${data._id}`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: WRONG, payload: res.data.data });
    })
    .catch((err) => console.log(err));
};

export const setright = (data) => {
  if (data.boxId === 1 || data.boxId === 2) {
    return data.boxId + 1;
  }
  return 3;
};

export const setwrong = (data) => {
  if (data.boxId === 2 || data.boxId === 3) {
    return data.boxId - 1;
  }
  return 1;
};
