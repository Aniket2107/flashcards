import axios from "axios";
import {
  ADD_CARD,
  GET_CARDS,
  DEL_CARD,
  CARD_ERROR,
  CARD_LOADING,
} from "./types";

import { API } from "../../backend";
import { tokenConfig } from "./authActions";

export const getCards = () => (dispatch, getState) => {
  dispatch(setCardsLoading());
  axios
    .get(`${API}cards`, tokenConfig(getState))
    .then((res) => dispatch({ type: GET_CARDS, payload: res.data.data }))
    .catch((err) =>
      dispatch({ type: CARD_ERROR, payload: err.response.data.msg })
    );
};

export const addCard = (data) => (dispatch, getState) => {
  axios
    .post(`${API}addCard`, data, tokenConfig(getState))
    .then((res) => dispatch({ type: ADD_CARD, payload: res.data.data }))
    .catch((err) =>
      dispatch({ type: CARD_ERROR, payload: err.response.data.msg })
    );
};

export const deleteCard = (id) => (dispatch, getState) => {
  axios
    .delete(`${API}card/delete/${id}`, tokenConfig(getState))
    .then((res) => dispatch({ type: DEL_CARD, payload: res.data.data }))
    .catch((err) =>
      dispatch({ type: CARD_ERROR, payload: err.response.data.msg })
    );
};

export const setCardsLoading = () => {
  return {
    type: CARD_LOADING,
  };
};
