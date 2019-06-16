// require path
var path = require("path");

// routing to the survey
module.exports = function(app){
 
    // routing to the home page
    app.use('/',function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
     
    app.get('/survey',function(req,res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};