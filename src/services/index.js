import axios from "axios";
import {
  CURRENT_WEATHER_API,
  WEATHER_FORECAST_API,
  API_KEY,
} from "../api";

export const loadCurrentWeather = (city) =>
  axios({
    method: "GET",
    url: CURRENT_WEATHER_API,
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

export const load5DaysForecast = (city) =>
  axios({
    method: "GET",
    url: WEATHER_FORECAST_API,
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
      cnt: 40,
    },
  });
