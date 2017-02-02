var User = require('../models/user');
var Student = require
var knex = require('../config.js').knex;
// var Student = require('../models/students');

module.exports = {

  testGetTopSecretInfo: {
    get: function(req, res) {


      if (req.session.level === 'priveledged') {
        res.send('top Secret');
      } else {
        res.send('nice try');
      }


    }
  },

  login: {

    post: function(req, res) {
      var first_name = req.body.first_name;
      var password = req.body.password;

      new User({ first_name: first_name })
        .fetch()
        .then(function(user) {
          if (!user) {
            res.send('no user by that name')
          } else {

            user.comparePassword(password, function(match) {
              if (match) {

                // set the permissions level
                req.session.level = 'priveledged'

                // res.send('its a re-hashed match!!')
                res.redirect('/')

                // change the session level
              } else {
                res.send('not the same hash this hash from the past')
              }
            });
          }
        });
    }
  },

  signup: {

    post: function(req, res) {
      var first_name = req.body.first_name;
      var password = req.body.password;

      new User({ first_name: first_name })
        .fetch()
        .then(function(user) {
          if (!user) {

            var newUser = new User({
              first_name: first_name,
              password: password
            });

            newUser.save()
              .then(function(newUser) {
                // util.createSession(req, res, newUser);
                res.send('new user created')
              });
          } else {
            res.send('Account already exists');
            // res.redirect('/signup');
          }
        });
    }
  },

  logout: {
    get: function(req, res) {

      console.log('from LOGOUT ==> ', req.session)
      req.session.destroy(function(err) {
        // cannot access session here
        console.log('session destroyed')
      })

      res.send('digging');

    }
  },

  query: {

    post: function(req, res) {
      var queryString = req.body.name;
      knex('students').where({
        first_name: queryString})
        .select('*').then(function(data){
          res.send(data);
        })
    }
  },

  studentInfo: {

    post: function(req, res) {
      var first_name = req.body.first_name;
      var last_name = req.body.last_name;
      var grade = req.body.grade;
      var IEP = req.body.IEP;
      var pic = req.body.pic;

      new Student({first_name: first_name})
      .fetch()
      .then(function(student) {
        if (!student) {
          var newStudent = new Student ({
            first_name: first_name,
            last_name: last_name,
            grade: grade,
            IEP: IEP,
            pic: pic
          })
        }
      })
    },

    get: function(req, res) {
      knex('students').select('*').then(function(data){
        res.send(data);
      })
    }
  }
}

