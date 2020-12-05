import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  getCurrentWeather,
  get5DaysForecast,
} from "../../store/actions/WeatherActions";

const SearchContainer = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  margin: 10px auto;
  width: 100%;
`;

const Button = styled.button`
  display: inline-block;
  color: #fa5a54;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #fa7a54;
  border-radius: 10px;
  display: block;
  height: 50px;
  min-width: 100px;
  outline-style: none;
  :hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 0.5em;
  color: #fa5a54;
  font-size: 1em;
  border: 2px solid gray;
  border-radius: 10px;
  background: whitesmoke;
  width: 600px;
  height: 30px;
  outline-style: none;
  @media (max-width: 1279px) {
    width: 300px;
  }
  @media (max-width: 767px) {
    width: 150px;
  }
`;

const SearchBox = () => {
  const [city, setCityValue] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = ({ target: { value } }) => {
    setCityValue(value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    dispatch(getCurrentWeather(city));
    dispatch(get5DaysForecast(city));
  };

  return (
    <SearchContainer
      onSubmit={(e) => {
        handleSearchClick(e);
      }}
    >
      <Input
        name="search"
        type="text"
        placeholder="Seattle"
        value={city}
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </SearchContainer>
  );
};

export default SearchBox;
