import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  getCurrentWeather,
  get5DaysForecast,
} from "../../store/actions/WeatherActions";

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 40px;
  margin: 10px auto;
  width: 80%;
`;

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  height: 40px;
  min-width: 100px;
`;

const Input = styled.input`
  padding: 0.5em;
  color: ${(props) => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 50%;
  height: 30px;
`;

const SearchBox = () => {
  const [city, setCityValue] = useState("Seattle");

  const dispatch = useDispatch();

  const handleInputChange = ({ target: { value } }) => {
    setCityValue(value);
  };

  const handleSearchClick = () => {
    dispatch(getCurrentWeather(city));
    dispatch(get5DaysForecast(city));
  };

  return (
    <SearchContainer>
      <Input
        name="search"
        type="text"
        placeholder="Seattle"
        value={city}
        onChange={handleInputChange}
      />
      <Button onClick={handleSearchClick}>Search</Button>
    </SearchContainer>
  );
};

export default SearchBox;
