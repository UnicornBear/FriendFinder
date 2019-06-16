// requires
var express = require("express");
// var path = require("path");
var bodyParser = require("body-parser");

// express app and PORT variable
var app = express();
var PORT = process.env.PORT || 8800;

// set up express to parse the data

app.use(express.static(_dirname + "app/public"));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json({
	type: "application/vnd.api+json"
}));


// require the routing to api and home html

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// need to start the server so it can listen to command
app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});