import {
  CURRENT_WEATHER_FAIL,
  CURRENT_WEATHER_LOAD,
  CURRENT_WEATHER_SUCCESS,
  FORECAST_5_DAYS_FAIL,
  FORECAST_5_DAYS_LOAD,
  FORECAST_5_DAYS_SUCCESS,
} from "../constants";

import { loadCurrentWeather, load5DaysForecast } from "../../services/index";

export const getCurrentWeather = (city) => async (dispatch) => {
  try {
    dispatch({
      type: CURRENT_WEATHER_LOAD,
      payload: {
        city,
      },
    });

    const { data } = await loadCurrentWeather(city);

    dispatch({
      type: CURRENT_WEATHER_SUCCESS,
      payload: {
        currentWeatherData: data,
        city,
      },
    });
  } catch (error) {
    dispatch({
      type: CURRENT_WEATHER_FAIL,
      error,
    });
  }
};

export const get5DaysForecast = (city) => async (dispatch) => {
  try {
    dispatch({
      type: FORECAST_5_DAYS_LOAD,
    });

    const { data } = await load5DaysForecast(city);

    dispatch({
      type: FORECAST_5_DAYS_SUCCESS,
      payload: {
        forecastData: data,
        city,
      },
    });
  } catch (error) {
    dispatch({
      type: FORECAST_5_DAYS_FAIL,
      error,
    });
  }
};
