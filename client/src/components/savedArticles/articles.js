import React, { Component } from "react";
import API from "../../utils/API.js";
import ArticlePanel from "./articlePanel";


class SavedArticles extends Component{

	constructor(){
		super();
		this.state = {
			articles:[],
			counter:0
		};
		// this.getArticles();
	}
	

	componentDidMount(){
		this.getArticles();
	}

	getArticles = () => {
		API.getArticles("/api/saved")
		.then((res) => {
				this.setState({
					articles: res.data
				});

			}
			);
		}

	handleDeleteArticle = (article) => (event) => {
			event.preventDefault();
			console.log("inside getArticles in class", article);
				API.deleteArticle(article).then((res) => {
				console.log("Articles REsult === ", res.data);
				this.getArticles();

				console.log("state articles == ",this.state.articles);
			})
	}

	componentWillMount(){
		this.setState({
			counter:0
		})
		// res => this.setState({ quotes: res.data })
	}

	componentWillReceiveProps(nextProps) {
        // some sort of logic that defines if new 
        // props are different than the previous ones
        console.log("inside componentWillReceiveProps ",nextProps );
        if(nextProps.saveSubmit)
        {
            this.getArticles();
        }
    }

	render(){
		return (

				<div>
			{this.state.articles.length !== 0 ?

				(<ArticlePanel 
				articles={this.state.articles}
				counter={this.state.counter}
				getArticlesFunc={this.getArticles}
				handleDeleteArticle={(article) => this.handleDeleteArticle(article)}
				/>)
				: (<div><h2 className="text-center">No Saved Articles</h2></div>)
			}
				
				</div>
			);
		}
}

export default SavedArticles;
