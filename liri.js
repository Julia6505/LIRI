var keyList = require("./keys.js");
var Twitter = require('twitter');
var request = require("request");
var get = require("get");
var Spotify = require('node-spotify-api');
var fs = require('fs');
var argumentInput = process.argv[2];

//Twitter request info and if statement that pulls data when 'my-tweets' is typed
var client = new Twitter ({
    consumer_key: "ns4NHV8Ory4wFR2T24NMSpm8L",
    consumer_secret: "rTcFGxAoidwZp637XvvhvkScXiCVk0vQrffoyrgBzz7BrWyn2z",
    access_token_key: "912017691363422208-ExBpJeLySGWXPMkkZvk4ChRTc8eMDhe",
    access_token_secret: "XanewrTpk0vg8hGsP918NUD0jKk8wGjBAAha6qKKpLPZe",
});
function twitter() {
// if(argumentInput == "my-tweets"){
var params = {screen_name: "juliaaaam8", count: 20}

client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (error) {throw error;
    };

    if (!error) {
    for(i = 0; i < tweets.length; i++){
    console.log(tweets[i].text);
    console.log(tweets[i].created_at);
    };
    };
  });
};
// end Twitter

//Spotify request info and if statement that pulls data when 'spotify-this-song' is typed
function spotify(song) {
var spotify = new Spotify({
    id: "569b986909fb40db838262de1380d393",
    secret: "f5b7b55801464dd3bc672665bd685f57"
  });
  // console.log("TEXT TEXT TEXT TEXT",text);
  var nodeArgsSong = process.argv;
  var songName = song;
  // if(argumentInput == "spotify-this-song"){
  for (var i = 3; i < nodeArgsSong.length; i++){
    if(i > 3 && i < nodeArgsSong.length){
      songName = songName + "+" + nodeArgsSong[i];
    } 
    else{
      songName += nodeArgsSong[i];
    }
  }

  if (songName === "") {
    songName = 'ace+of+base+sign';
  };

  spotify.search({ type: 'track', query: songName, limit: 1 }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    if (!err) {
    var spotifyData = data.tracks.items;
      // for (var i = 0; i < spotifyData.length; i++){
        
  console.log(spotifyData[0].album.name); 
  console.log(spotifyData[0].artists[0].name); 
  console.log(spotifyData[0].name); 
  console.log(spotifyData[0].external_urls);
    // };
  }
  });
};
//end Spotify

//OMDB request info and if statement that pulls data when 'movie-this' is typed
// if(argumentInput == "movie-this"){
function omdb() {
var nodeArgsMovies = process.argv;
var movieName = "";
for (var i = 3; i < nodeArgsMovies.length; i++) {
  if (i > 3 && i < nodeArgsMovies.length) {
    movieName = movieName + "+" + nodeArgsMovies[i];
  }else {movieName += nodeArgsMovies[i];
  }
}
if (movieName === "") {
  movieName = "Mr+Nobody";
};
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

request(queryUrl, function(error, response, body){

if (error) {
  return console.log('Error occurred: ' + error);
}
if (!error) {
  // console.log(body);
  console.log("Title: " + JSON.parse(body).Title)
  console.log("Release Year: " + JSON.parse(body).Year)
  console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value)
  console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value)
  console.log("Country of Origin: " + JSON.parse(body).Country)
  console.log("Language: " + JSON.parse(body).Language)
  console.log("Plot: " + JSON.parse(body).Plot)
  console.log("Actors: " + JSON.parse(body).Actors)
}
});
};
//end OMDB

function doIt() {
if(argumentInput == "do-what-it-says"){
  fs.readFile('random.txt', "utf8", function(error, data){
    var txt = data.split(',');
    spotify(txt[1]);
  });
};
};
//all conditional statements that occur when data is placed in the console 
  switch (argumentInput) {
  case 'my-tweets':
      twitter();
      break;

  case 'spotify-this-song':
      spotify("");
      break;

  case 'movie-this':
      omdb();
      break;

  case 'do-what-it-says':
      doIt();
      break;
}

