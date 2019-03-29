import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SearchBar from "./search_bar";
import PageIndex from "./page_index";

const App = () => {
  return (
    <div>
      <SearchBar />
      <PageIndex />
    </div>
  );
};

export default App;
