import React, { Component } from "react";
import Navpills from "./Navpills";
import Search from "./search/search";
import SavedArticles from "./savedArticles/articles";
import NytHeader from "./NytHeader";


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
              <Navpills className="navbar navbar-dark fixed-top navtabs scrolling-navbar top-nav-collapse"
                currentPage={this.state.currentPage}
                handlePageChange={this.handlePageChange}
              />
              <NytHeader background="rgb(15, 48, 85)"/>

                {this.getPageRender()}
      </div>
    );
  }
}

export default PortfolioContainer;
