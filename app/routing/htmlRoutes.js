// require path
var path = require('path');

// routing to the survey
module.exports = function(app){
    
    app.get('/survey',function(req,res) {
        res.sendFile(path.join(_dirname + '/../public/survey.html'));
    });


    // routing to the home page
    app.use(function(req,res) {
            res.sendFile(path.join(_dirname + '/../public/home.html'));
    });

};