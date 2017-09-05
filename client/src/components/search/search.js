import React, { Component } from "react";
import NytHeader from "../NytHeader";
import Form from "./form";
import API from "../../utils/API.js";
import ResultPanel from "./resultPanel";
import SavedArticles from "../savedArticles/articles";


class Search extends Component{

	state = {
		searchTerm:"",
		startYear:"",
		endYear:"",
		numRecordsSelect:5,
		results:[],
		counter:0,
		formSubmit:false,
		saveSubmit:false
	}

	handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const id = event.target.id;
    console.log("id ===", id);
    console.log("value == ",value);
    // Updating the input's state
    this.setState({
      [id]: value,
    });

    //1. handle start date and end dates as integers.
    //2. handle one more input in states which is no of records for an article
    //3. render this search component separate and put a container outside for header and results etc.
    

  };

  
  componentWillMount(){
  	this.setState({
  		formSubmit:false,
  		counter:0,
  		results:[]
  	});
  	new SavedArticles();
  }

  handleOnSubmit = event =>{
    	event.preventDefault();
    	this.setState({
    		formSubmit:true
    	});

  		API.searchArticles(this.state.searchTerm, this.state.startYear, this.state.endYear)
  		.then((res) => {
  			console.log("Result == ",res.data.response.docs);
  			let resultedDocs = [];
  			if(this.state.numRecordsSelect < 10 && res.data.response.docs.length !== 0 ){
				for(let i=0; i< this.state.numRecordsSelect; i++){
					resultedDocs.push(res.data.response.docs[i]);
				}
  				this.setState({results:resultedDocs});

  			} else{
  				this.setState({results:res.data.response.docs});

  			}
  		});
  };

  handleSaveArticle = (article) => (event) => {
    event.preventDefault();
  	console.log("inside handleSaveArticle", article);
    API.saveArticle(article).then((res) => {
    	console.log("Article Saved :: ",res);
    	console.log("ARTICle Func == ",this.props.getArticlesFunc);
    	this.setState({
    		saveSubmit:true
    	})
     	});

  }

  handleOnClearResults = (event) => {
  	this.setState({
  		results:[],
  		searchTerm:"",
  		formSubmit:false
  	})
  }


  renderResults = () => {
				// <SavedArticles saveSubmit={this.state.saveSubmit}/>
  if(this.state.formSubmit){
  	if(this.state.results.length !== 0){
  		console.log("inside render Results :: ",this.state.results.length);
  		return <ResultPanel results={this.state.results} 
  							counter={this.state.counter}
  							handleSaveArticle = {(article) => this.handleSaveArticle(article)}
  							/>;

  	} else if(this.state.results.length === 0) {
  		return (
  		<div className="container">
			<h2>No Results Found</h2>
  		</div>
  		);
  	}
  }

  	
  }

  
	render(){
		return(
				<div>
				<NytHeader background="pink"/>
				<div className="container">
					<Form 
					searchTerm={this.state.searchTerm}
					startYear={this.state.startYear}
					endYear={this.state.endYear} 
					handleInputChange={this.handleInputChange} 
					handleOnSubmit={this.handleOnSubmit} 
					handleOnClearResults={this.handleOnClearResults}
					/>
				</div>
						{this.renderResults()}



				</div>
				
			);

	}
}

export default Search