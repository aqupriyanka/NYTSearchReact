
var article = require("../model/article");

var articleJson = {
	title: "trump",
	section:"politics",
	author:"anonymous"

};
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

module.exports={

	search:function(req,res){
		console.log("inside search controller");
		console.log("Req params === ",req.body);
		console.log("Req params === ",req.params);
		console.log("Req params === ",req.query);
		

		var searchTerm = req.query.searchTerm;
		var queryURL = queryURLBase + searchTerm;

		// Num Results
		// numResults = $("#numRecordsSelect").val();

		// Start Year
		var startYear = req.query.startYear;

		// End Year
		var endYear = req.query.endYear;

		// If the user provides a startYear -- the startYear will be included in the queryURL
		if (parseInt(startYear)) {
			queryURL = queryURL + "&begin_date=" + startYear + "0101";
		}

		// If the user provides a startYear -- the endYear will be included in the queryURL
		if (parseInt(endYear)) {
			queryURL = queryURL + "&end_date=" + endYear + "0101";
		}

		$.ajax({url: queryURL, method: "GET"}) 
		.done(function(NYTData) {
			res.json(NYTData);
		});
	},

	saveArticle: function(req,res){

		var newArticle = new article({
			title : req.body.article.headline.main,
			url : req.body.article.web_url,
			date : req.body.article.pub_date,
			byline: req.body.article.byline.original,
			snippet: req.body.article.snippet
		});

		newArticle.save(function(err,doc){
			if(err) res.send(err);
			res.send(doc);
		});

	},

	getArticles: function(req,res){
		console.log("getArticles");
		article.find({}, function(err,doc){
			if (err) {
		        res.send(err);
		      }
		      // Or, send our results to the browser, which will now include the books stored in the library
		      else {
		        res.send(doc);
		      }
		  });
	},

	deleteArticle: function(req,res){
		var id = req.params.id;
		article.remove({ _id:id}, function(err,doc){
			if (err) {
		        res.send(err);
		      }
		      // Or, send our results to the browser, which will now include the books stored in the library
		      else {
		        res.send(doc);
		      }
		  });
	}
}



