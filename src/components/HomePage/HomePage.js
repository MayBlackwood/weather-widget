import React from "react";
import styled from "styled-components";
import Header from "../Header";
import SearchBox from "../SearchBox";
import WeatherCard from "../WeatherCard";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  // border: 2px solid purple;
  border-radius: 2px;
  width: 60%;
  height: auto;
  margin: 100px auto;
`;

const HomePage = () => (
  <StyledContainer>
    <Header />
    <SearchBox />
    <WeatherCard />
  </StyledContainer>
);

export default HomePage;
