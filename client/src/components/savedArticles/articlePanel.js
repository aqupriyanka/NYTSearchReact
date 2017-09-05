import React from "react";

let articleCounter=0;

const getArticles = (props) =>{
	articleCounter = props.counter;
		return (
			<div>
			{props.articles.map(article =>
			<div className="card" id="wellSection">
				<div className="card-block wellPosition" id={handleCounter()}>
					<h3>
						<span className="label label-primary counterNumber">{articleCounter}</span>
						<strong>
							<a href={article.url} className="card-title">{article.title}</a>
						</strong>
					</h3>
					<div className="panelRestBody">
						<h5>{article.byline}</h5>
						<h5>{article.date}</h5>
						<p>{article.snippet}</p>
					</div>	
					<button className="btn btn-info deleteButton" 
					onClick={props.handleDeleteArticle(article)}>Delete</button>
				</div>
			</div>
			)}
			</div>
		); 

}

const handleCounter = () => {
	articleCounter++;
	return articleCounter;
}

const ArticlePanel = (props) =>

<div className="container">
<div className="row">
	<div className="col-sm-12">

		

			{getArticles(props)}
			
		</div>
	</div>
	
</div>;

export default ArticlePanel;

