var keyList = require("./keys.js");
var Twitter = require('twitter');
var request = require("request");
var get = require("get");
var Spotify = require('node-spotify-api');

// var client = new Twitter ({
//     consumer_key: "ns4NHV8Ory4wFR2T24NMSpm8L",
//     consumer_secret: "rTcFGxAoidwZp637XvvhvkScXiCVk0vQrffoyrgBzz7BrWyn2z",
//     access_token_key: "912017691363422208-ExBpJeLySGWXPMkkZvk4ChRTc8eMDhe",
//     access_token_secret: "XanewrTpk0vg8hGsP918NUD0jKk8wGjBAAha6qKKpLPZe",
// });

// var params = {screen_name: "juliaaaam8", count: 20}

// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//     if (error) {throw error;
//     };

//     if (!error) {
//     for(i = 0; i < tweets.length; i++){
//     console.log(tweets[i].text);
//     console.log(tweets[i].created_at);
//     };
//     };
//   });

var spotify = new Spotify({
    id: "569b986909fb40db838262de1380d393",
    secret: "f5b7b55801464dd3bc672665bd685f57"
  });
  
  spotify.search({ type: 'track', query: 'Barbie Girl', limit: 1}, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  
  console.log(data.tracks.items[0].album.name); 
  console.log(data.tracks.items[0].artists[0].name); 
  console.log(data.tracks.items[0].name); 
  });
