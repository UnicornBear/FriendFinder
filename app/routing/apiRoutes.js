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
        // setup Var for finding friend match
        var newFriend = req.body;
        // var newScore = newFriend.scores;
 

        // parseint for scores
        for (var i = 0; i < newFriend.scores.length; i++){
            newFriend.scores[i] = parseInt(newFriend.scores[i]);
        }
 
        var index = 0;
        var minDifference = 40;
        
        for(var i = 0; i < friends.length; i++) {
            var total = 0;

            // loop through the scores from 10 questions
            for (var j = 0; j < friends[i].scores.length; j++){
                // figure value for each friend
                var diff = Math.abs(newFriend.scores[j] - friends[i].scores[j]);
                total += diff;

            }

            //
            if(total < minDifference){
                index = i;
                minDifference = total;
            }
        }
        // looks like Rich is always the match, now Logan, since he is first in Friends listing

    // log report for Best Friend Match
    console.log("Best Friend Match: ", friends[index]);

    // update friends with newFriend
    friends.push(newFriend);
    // 
    res.json(friends[index]);

    });
};
<<<<<<< HEAD




=======
>>>>>>> f124249e575518e57cafa4928356b682c11b3dbb
