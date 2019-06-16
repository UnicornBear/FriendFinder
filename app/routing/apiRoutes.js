// require PATH
var path = require("path");
// load friends data
var friends  = require("../data/friends.js");


module.exports = function(app) {
    // GET ROUTE JSON - all friends possible
    app.get("/api/friends", function(req,res) {
        console.log("Success Reading the API Friends");
        res.json(friends);
    });


    // post new friend addition
    app.post("/api/new", function(req,res) {
    // app.post('/api/friends', function(req,res) {
        //setup Var for finding friend match
        var newFriend = req.body;
        var newScore = newFriend.scores;
        var total = 0;
        var bestMatch = 1000;
        var index = -1;

        // loop through the list of friends available
        for (var i = 0; i < friends.length; i++){
            
            for (var j = 0; j < newScore.length; j++){
                // figure value for each friend
                var diff = Math.abs(newScore[j] - friends[i].scores[j]);
                total += diff;
            }
            //
            if(total < bestMatch){
                bestMatch = total;
                index = i;
            }
        }
        // log report for Best Friend Match
        console.log("Best Friend Match: ", friends[index]);
        // update friends with newFriend
        friends.push(newFriend);
        // 
        res.json(friends[index]);
    });
};