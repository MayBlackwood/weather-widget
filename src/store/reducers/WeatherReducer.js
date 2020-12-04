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
  currentWeatherData: null,
  forecastData: null,
  isLoading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_WEATHER_LOAD:
      return {
        ...state,
        isLoading: true,
        city: action.payload.city,
        error: null,
      };

    case CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        currentWeatherData: action.payload.currentWeatherData,
        isLoading: false,
      };

    case CURRENT_WEATHER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
				city: "",
				currentWeatherData: null,
      };

    case FORECAST_5_DAYS_LOAD:
      return {
        ...state,
        isLoading: true,
        city: action.payload.city,
        error: null,
      };

    case FORECAST_5_DAYS_SUCCESS:
      return {
        ...state,
        forecastData: action.payload.forecastData,
        isLoading: false,
      };

    case FORECAST_5_DAYS_FAIL:
      return {
        ...state,
        isLoading: false,
        city: "",
        error: action.error,
				forecastData: null,
      };

    default:
      return state;
  }
};
