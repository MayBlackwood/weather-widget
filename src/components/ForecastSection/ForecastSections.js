import React from "react";
import styled from "styled-components";
import moment from "moment";

import { ICON_URL } from "../../constants";

const WeatherContainer = styled.div`
  display: flex;
  min-height: 200px;
  justify-content: space-around;
  width: 100%;
  margin: 10px 0;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const DayCard = styled(Box)`
  @media (max-width: 767px) {
    border-top: 4px solid rgb(121,138,151);
  }
`;

const Image = styled.div`
  background-image: url(${(props) => props.background});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
`;

const UppercaseText = styled.p`
  text-transform: uppercase;
`;

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
