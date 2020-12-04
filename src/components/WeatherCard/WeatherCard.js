import React from "react";
import styled from "styled-components";
import CurrentWeatherSection from "../CurrentWeatherSection";

const WeatherCardContainer = styled.div`
  border: 2px solid purple;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 500px;
`;

const WeatherCard = () => {
  return (
    <WeatherCardContainer>
      <CurrentWeatherSection />
    </WeatherCardContainer>
  );
};

export default WeatherCard;
