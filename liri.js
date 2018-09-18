require("dotenv").config();
var Spotify = require('node-spotify-api');
var moment= require("moment");
var request = require("request");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var search = process.argv[3];


if (command === "concert-this"){
  var queryURL = "https://rest.bandsintown.com/artists/" + search + "/events?app_id=codingbootcamp"
  request(queryURL,function (err, response, body) {

    if(OBJ === undefined){
    console.log("Sorry, no upcoming shows")}
    else { 
      var OBJ = JSON.parse(body);
      var name = (OBJ[0].venue.name);
      var city = (OBJ[0].venue.city);
      var date = (OBJ[0].datetime);
      var formattedDate = moment(date).format("MM/DD/YYYY HH:mm:ss")
      console.log(name);
      console.log(city);
      console.log(formattedDate);}
    }
  )}


if (command === "spotify-this-song"){ 
  spotify.search({ type: 'track', query: search}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });


}

if (command === "movie-this"){



}

if (command === "do-what-it-says"){



}