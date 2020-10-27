import axios from "axios";
import { API } from "../../backend";
import { tokenConfig } from "./authActions";
import { CORRECT, WRONG } from "./types";

export const right = (data) => (dispatch, getState) => {
  let body = {
    boxId: 2,
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
    boxId: 1,
  };
  axios
    .put(`${API}card/update/${data._id}`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: WRONG, payload: res.data.data });
    })
    .catch((err) => console.log(err));
};
