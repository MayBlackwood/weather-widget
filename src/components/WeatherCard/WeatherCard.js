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
  width: 760px;
  align-items: center;
  min-height: 160px;
  padding: 20px;
  margin: 20px 0;
  border: 4px solid rgb(121, 138, 151);
  border-radius: 10px;
  @media (max-width: 1279px) {
    width: 450px;
  }
  @media (max-width: 767px) {
    width: 250px;
  }
`;

const Title = styled.p`
  font-weight: bold;
`;

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
      {!isLoading &&
        !!error
       && (
          <Message text={error.message} color={"#FC4B3A"} />
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
