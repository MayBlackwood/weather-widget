import React from "react";

import Header from "../Header";
import SearchBox from "../SearchBox";
import WeatherCard from "../WeatherCard";
import { StyledContainer } from "./styled";

const HomePage = () => (
  <StyledContainer>
    <Header />
    <SearchBox />
    <WeatherCard />
  </StyledContainer>
);

export default HomePage;
