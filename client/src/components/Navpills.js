import React from "react";

const Navpills = props =>
<div className="scrolling-navbar top-nav-collapse fixed-top">
  <ul className="nav nav-tabs ">
    <li className="nav-items" onClick={() => props.handlePageChange("Search")}>
      <a>Home</a>
    </li>
    <li className="nav-items" onClick={() => {
      props.handlePageChange("SavedArticles")}}>
      <a>Saved Articles</a>
    </li>
  </ul>
 </div>;

export default Navpills;
