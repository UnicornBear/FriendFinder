// require path
var path = require("path");

// routing to the survey
module.exports = function(app){
 
	app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "../public/survey.html"));
    });
  
    app.use("/", function (req, res) {
		res.sendFile(path.join(__dirname + "../public/home.html"));
    });
    
};