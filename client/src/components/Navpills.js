import React from "react";

const Navpills = props =>
  <ul className="nav nav-tabs">
    <li onClick={() => props.handlePageChange("Search")}>
      <a>Home</a>
    </li>
    <li onClick={() => {
      props.handlePageChange("SavedArticles")}}>
      <a>Saved Articles</a>
    </li>
  </ul>;

export default Navpills;
