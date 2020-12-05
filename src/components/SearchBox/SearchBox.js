import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  getCurrentWeather,
  get5DaysForecast,
} from "../../store/actions/WeatherActions";
import { Button, Input, SearchContainer } from "./styled.js";

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
