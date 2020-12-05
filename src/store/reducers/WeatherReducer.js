import {
  CURRENT_WEATHER_FAIL,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_LOAD,
  FORECAST_5_DAYS_FAIL,
  FORECAST_5_DAYS_LOAD,
  FORECAST_5_DAYS_SUCCESS,
} from "../constants";

const INITIAL_STATE = {
  city: "",
  currentWeatherData: {},
  forecastData: {},
  isLoading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_WEATHER_LOAD:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        currentWeatherData: action.payload.currentWeatherData,
        isLoading: false,
        city: action.payload.city,
      };

    case CURRENT_WEATHER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
				city: "",
				currentWeatherData: {},
      };

    case FORECAST_5_DAYS_LOAD:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FORECAST_5_DAYS_SUCCESS:
      return {
        ...state,
        forecastData: action.payload.forecastData,
        city: action.payload.city,
        isLoading: false,
      };

    case FORECAST_5_DAYS_FAIL:
      return {
        ...state,
        isLoading: false,
        city: "",
        error: action.error,
				forecastData: {},
      };

    default:
      return state;
  }
};
