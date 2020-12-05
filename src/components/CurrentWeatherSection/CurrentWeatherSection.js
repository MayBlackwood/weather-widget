import React from "react";
import styled from "styled-components";
import moment from "moment";

import { ICON_URL } from "../../constants";

const WeatherContainer = styled.div`
  display: flex;
  min-height: 200px;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ParametresBox = styled(Box)`
  justify-content: center;
  align-items: flex-start;
  font-size: 1em;
  @media (max-width: 767px) {
    align-items: center;
  }
`;

const Image = styled.div`
  background-image: url(${(props) => props.background});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 1em;
`;

const Temperature = styled(Title)`
  font-size: 1.5em;
`;

const UppercaseText = styled.span`
  text-transform: uppercase;
`;

const CurrentWeatherSection = ({ data: { weather, main, wind, sys } }) => {
  const { main: description, icon } = weather[0];

  return (
    <WeatherContainer>
      <Box>
        <Image background={`${ICON_URL}/${icon}@2x.png`}></Image>
        <Title>{description}</Title>
      </Box>
      <Box>
        <Temperature>
          {main.temp}
          <sup> &deg;</sup>C
        </Temperature>
      </Box>
      <ParametresBox>
        <div>Wind: {wind.speed} m/s</div>
        <div>
          Sunrise: {moment.unix(sys.sunrise).format("h:mm")}{" "}
          <UppercaseText>{moment.unix(sys.sunrise).format("a")}</UppercaseText>
        </div>
        <div>
          Sunset: {moment.unix(sys.sunset).format("h:mm")}{" "}
          <UppercaseText>{moment.unix(sys.sunset).format("a")}</UppercaseText>
        </div>
      </ParametresBox>
    </WeatherContainer>
  );
};

export default CurrentWeatherSection;
