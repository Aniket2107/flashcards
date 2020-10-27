import {
  ADD_CARD,
  GET_CARDS,
  DEL_CARD,
  CARD_ERROR,
  CARD_LOADING,
} from "../actions/types";

const initialState = {
  items: [],
  loading: false,
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        items: [action.payload, ...state],
        error: "",
      };
    case GET_CARDS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: "",
      };
    case DEL_CARD:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
        error: "",
      };
    case CARD_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case CARD_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    default:
      return state;
  }
}
