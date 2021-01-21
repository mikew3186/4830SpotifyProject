/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * This code was pulled from Spotify's Github and was slightly modified to fit with Angular
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = '050e5c451aaa4262b4244b2248dc7c34'; // Your client id
var client_secret = '0de14c8cfe0b45a592e2b53ccf5190f4'; // Your secret
var redirect_uri = 'https://www.mjwcbc.me:8081/callback'; // Your redirect uri


const https = require("https"),
  fs = require("fs");

const options = {
  key: fs.readFileSync("/home/mjwcbc/mjwcbc.me.key"),
  cert: fs.readFileSync("/home/mjwcbc/mjwcbc.me.crt"),
  ca: fs.readFileSync( '/home/mjwcbc/mjwcbc.me.intermediate.crt' )
};


/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
   .use(cors())
   .use(cookieParser());

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email user-read-recently-played user-top-read user-library-read';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });
          
          // sets a cookie in the user's browser
          res.cookie('access',access_token);
          // redirects the user to the app
          res.redirect('/');

      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

// get data about the user's profile
app.get('/api/userinfo', function(req, res) {

    var access_token = req.header('Authorization');
    console.log(access_token);
  
  var authOptions = {
    url: 'https://api.spotify.com/v1/me',
    headers: { 'Authorization': 'Bearer ' + access_token },
  };

  request.get(authOptions, function(error, response, body) {
    console.log(response.statusCode);
    if (!error && response.statusCode === 200) {
        console.log(body);
        res.json(JSON.parse(body));
    }
  });
});

// get the user's 20 most recently played tracks
app.get('/api/recentlyplayed', function(req, res) {

    var access_token = req.header('Authorization');
    console.log(access_token);
  
  var authOptions = {
    url: 'https://api.spotify.com/v1/me/player/recently-played',
    headers: { 'Authorization': 'Bearer ' + access_token },
  };

  request.get(authOptions, function(error, response, body) {
    console.log(response.statusCode);
    if (!error && response.statusCode === 200) {
        console.log(body);
        res.json(JSON.parse(body));
    }
  });
});


// gets the user's top artists
app.get('/api/topartists', function(req, res) {

    var access_token = req.header('Authorization');
    console.log(access_token);

  var authOptions = {
    url: 'https://api.spotify.com/v1/me/top/artists?limit=10',
    headers: { 'Authorization': 'Bearer ' + access_token },
  };

  request.get(authOptions, function(error, response, body) {
    console.log(response.statusCode);
    if (!error && response.statusCode === 200) {
        console.log(body);
        res.json(JSON.parse(body));
    }
  });
});


// gets the user's top 10 tracks
app.get('/api/toptracks', function(req, res) {

    var access_token = req.header('Authorization');
    console.log(access_token);

  var authOptions = {
    url: 'https://api.spotify.com/v1/me/top/tracks?limit=10',
    headers: { 'Authorization': 'Bearer ' + access_token },
  };

  request.get(authOptions, function(error, response, body) {
    console.log(response.statusCode);
    if (!error && response.statusCode === 200) {
        console.log(body);
        res.json(JSON.parse(body));
    }
  });
});

// gets 10 new Spotify releases
app.get('/api/newreleases', function(req, res) {

    var access_token = req.header('Authorization');
    console.log(access_token);

  var authOptions = {
    url: 'https://api.spotify.com/v1/browse/new-releases?limit=10',
    headers: { 'Authorization': 'Bearer ' + access_token },
  };

  request.get(authOptions, function(error, response, body) {
    console.log(response.statusCode);
    if (!error && response.statusCode === 200) {
        console.log(body);
        res.json(JSON.parse(body));
    }
  });
});

app.use('/*',function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

console.log('Listening on 8081');
//app.listen(8081);
app.listen(8001);

https.createServer(options, app).listen(8081);