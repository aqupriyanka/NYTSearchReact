// Require our dependecies
var express = require("express");
var mongoose = require("mongoose");
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");

// Set up a default port, configure mongoose, configure our middleware
var PORT = process.env.PORT || 3001;
mongoose.Promise = bluebird;
var app = express();

// enable CORS, use:
// https://enable-cors.org/server_expressjs.html
// ...there also CORS modules to do this.
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token')
    next();
  });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/", routes);




var db = process.env.MONGODB_URI || "mongodb://localhost/NytSearchDB";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});

// app.listen(app.get("port"), () => {
//   console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
// });