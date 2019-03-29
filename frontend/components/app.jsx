import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SearchBar from "./search_bar";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default App;
