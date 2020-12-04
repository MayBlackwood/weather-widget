import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CurrentWeatherSection from "../CurrentWeatherSection";
import Loader from "../Loader";
import ForecastSection from "../ForecastSection";
import Message from "../Message";

const WeatherCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 160px;
  padding: 20px;
  margin: 20px 0;
  border: 4px solid rgb(121, 138, 151);
  border-radius: 10px;
`;

const WeatherCard = () => {
  const {
    isLoading,
    error,
    currentWeatherData,
    forecastData,
    city,
  } = useSelector((store) => store.weather);

  return (
    <WeatherCardContainer>
      {!isLoading &&
        !!error &&
        error.message !== "Request failed with status code 404" && (
          <Message text={error.message} />
        )}
      {!isLoading && !city && <Message text={"City Not Found"} />}
      {isLoading && !error && <Loader />}
      {!isLoading && !error && !!city && (
        <>
          <CurrentWeatherSection />
          <ForecastSection />
        </>
      )}
    </WeatherCardContainer>
  );
};

export default WeatherCard;
