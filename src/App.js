import React from "react";
import { Provider } from "react-redux";
import HomePage from "./components/HomePage";
import "./App.css";
import store from "./store/index";

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default App;
