import React from "react";
import moment from "moment";

import { ICON_URL } from "../../constants";
import {
  WeatherContainer,
  Box,
  ParametresBox,
  Image,
  Title,
  Temperature,
  UppercaseText,
} from "./styled";

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
