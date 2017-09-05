var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: String,
  url : String,
  date : Date,
  byline : String,
  snippet : String
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;