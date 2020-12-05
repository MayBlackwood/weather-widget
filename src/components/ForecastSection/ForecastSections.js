import React from "react";
import moment from "moment";

import { ICON_URL } from "../../constants";
import { WeatherContainer, Box, DayCard, Image, UppercaseText } from "./styled";

const ForecastSection = ({ data }) => {
  const list = data.list || [];

  const weatherList = list.filter((item) => {
    return moment(item.dt_txt).format("HH") === "12";
  });

  return (
    <WeatherContainer>
      {weatherList.map(({ dt, dt_txt, weather, main: { temp } }) => {
        return (
          <DayCard key={dt}>
            <Box>
              <UppercaseText>{moment(dt_txt).format("ddd")}</UppercaseText>
            </Box>
            <Image background={`${ICON_URL}/${weather[0].icon}@2x.png`}></Image>
            <Box>
              <p>
                {temp}
                <sup> &deg;</sup>C
              </p>
            </Box>
          </DayCard>
        );
      })}
    </WeatherContainer>
  );
};

export default ForecastSection;
