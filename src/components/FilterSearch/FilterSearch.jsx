import React, { Component } from "react";
import "./FilterSearch.css";

const FilterSearch = props => {
  return (
    <React.Fragment>
      <input
        id="search"
        onChange={props.handleInput}
        type="text"
        className={`filter-search ${props.moveNav ? "show" : ""}`}
        placeholder="Title, Characters, Type"
      />
    </React.Fragment>
  );
};
export default FilterSearch;
