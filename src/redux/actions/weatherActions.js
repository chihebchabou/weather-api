import axios from 'axios';
import { SET_ERROR, SET_LOADING, SET_RESPONSE_SUCCESS } from './types';

export const searchWeather = query => async dispatch => {
  dispatch({ type: SET_LOADING });
  try {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${query}&days=4&aqi=no&alerts=no`
    );

    dispatch({ type: SET_RESPONSE_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: SET_ERROR, payload: error.message });
  }
};
