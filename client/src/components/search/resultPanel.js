import React from "react";

let articleCounter=0;

const getArticles = (props) =>{
	articleCounter = props.counter;
		return (
			<div>
			{props.results.map(articles =>
			<div className="card" id="wellSection">
				<div className="card-block result-block" id={handleCounter()}>
					<h3>
						<span className="badge badge-info counterNumber">{articleCounter}</span>
						<strong>
							<a href={articles.web_url} className="card-title">{articles.headline.main}</a>
						</strong>
					</h3>
					<div className="panelRestBody">
						{(articles.byline && String(articles.byline.original) !== null) ? 
								(<h5>{articles.byline.original}</h5>)
									: (<div></div>)
							}
						<h5>{articles.pub_date}</h5>
						<p>{articles.snippet}</p>
					</div>
					<button className="btn btn-info deleteButton" onClick={props.handleSaveArticle(articles)}>Save</button>
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

		<div className="card">

			<div className="card-header info-color lighten-2 resultHeader">
				<h3 className="panel-title"><strong>
				<i className="fa fa-table"></i>   Top Articles</strong></h3>
			</div>

			{getArticles(props)}
			
		</div>
	</div>
	</div>
</div>;

export default ResultPanel;

