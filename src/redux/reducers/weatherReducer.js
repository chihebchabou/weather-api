import { SET_ERROR, SET_LOADING, SET_RESPONSE_SUCCESS } from '../actions/types';

const initialState = {
  response: null,
  loading: false,
  error: null,
};

const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RESPONSE_SUCCESS:
      return {
        ...state,
        response: payload,
        loading: false,
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
