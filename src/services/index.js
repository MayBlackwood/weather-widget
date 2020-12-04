import axios from "axios";
import { currentWeatherApi, apiKey } from "../constants";

export const loadCurrentWeather = (city) =>
  axios({
    method: "GET",
    url: `http://api.openweathermap.org/data/2.5/weather`,
    // url: `http://${currentWeatherApi}`,
    params: {
      q: city,
      appid: apiKey,
    },
  });

export const load5DaysForecast = (city) =>
  axios({
    method: "GET",
    url: `http://api.openweathermap.org/data/2.5/forecast`,
    params: {
      q: city,
      appid: apiKey,
    },
  });
