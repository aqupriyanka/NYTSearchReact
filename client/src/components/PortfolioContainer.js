import React, { Component } from "react";
import Navpills from "./Navpills";
import Search from "./search/search";
import SavedArticles from "./savedArticles/articles";


class PortfolioContainer extends Component {
  state = {
    currentPage: "Search"
  };

  handlePageChange = page => {
    console.log("Setting current state == ",page);
    this.setState({ currentPage: page });
  };

  getPageRender = () => {
    
    if(this.state.currentPage === "SavedArticles")
        return <SavedArticles saveSubmit="true"/>
    if(this.state.currentPage === "Search")
      return <Search />;
  };

  render() {
    return (
      <div>
        <Navpills
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
          {this.getPageRender()}

      </div>
    );
  }
}

export default PortfolioContainer;
