import React from "react";
import { useSelector } from "react-redux";

import CurrentWeatherSection from "../CurrentWeatherSection";
import Loader from "../Loader";
import ForecastSection from "../ForecastSection";
import Message from "../Message";
import { Title, WeatherCardContainer } from "./styled";

const WeatherCard = () => {
  const {
    isLoading,
    error,
    currentWeatherData,
    forecastData,
    city,
  } = useSelector((store) => store.weather);

  const { name } = currentWeatherData;

  return (
    <WeatherCardContainer>
      {!isLoading && !!error && (
        <Message text={error.response.data.message} color={"#FC4B3A"} />
      )}
      {!isLoading && !city && !error && <Message text={"City Not Found"} />}
      {isLoading && !error && <Loader />}
      {!isLoading && !error && !!city && (
        <>
          <Title>{name}</Title>
          <CurrentWeatherSection data={currentWeatherData} />
          <ForecastSection data={forecastData} /> {/* {} */}
        </>
      )}
    </WeatherCardContainer>
  );
};

export default WeatherCard;
