import React from "react";

let articleCounter=0;

const getArticles = (props) =>{
	articleCounter = props.counter;
		return (
			<div>
			{props.results.map(articles =>
			<div className="panel-body" id="wellSection">
				<div className="well" id={handleCounter()}>
					<h3>
						<span className="label label-primary">{articleCounter}</span>
						<strong>
							<a href={articles.web_url}>{articles.headline.main}</a>
						</strong>
					</h3>
					<h5>{articles.byline.original}</h5>
					<h5>{articles.pub_date}</h5>
					<p>{articles.snippet}</p>
					<button className="btn btn-info" onClick={props.handleSaveArticle(articles)}>Save</button>
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

const ResultPanel = (props) =>

<div className="container">
<div className="row">
	<div className="col-sm-12">

		<div className="panel panel-primary">

			<div className="panel-heading">
				<h3 className="panel-title"><strong>
				<i className="fa fa-table"></i>   Top Articles</strong></h3>
			</div>

			{getArticles(props)}
			
		</div>
	</div>
	</div>
</div>;

export default ResultPanel;

