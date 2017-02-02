var express = require('express');
var app = express();

var path = require('path');

var session = require('express-session')

var bookshelf = require('./config.js');

var bodyParser = require('body-parser');
var router = require('./routes.js');



//////
// express-sessions
//////

var sess = {
  secret: 'bbucsecRit',
  cookie: {},
  resave: false,
  saveUninitialized: true,
}

if (app.get('env') === 'production') {
  // app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

/////
// end express-sessions
/////



// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));


// catch anything named correctly in /../client
app.use(express.static(__dirname + '/../client'));

// Set up our api routes
app.use('/api', router);

// catch any other urls and send to index.html in /../client
app.get('*', function(req, res) {
  var sess = req.session
  // sess.rights = 'user'

  console.log('from wildcard route!! ', req.session)
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});


// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })

module.exports = app;