var User = require('../models/user');
var knex = require('../config.js').knex;

var Student = require('../models/student');
var Log = require('../models/log')



module.exports = {

  query: {

    get: function(req, res) {
      var firstName = req.query.name.split(" ")[0];
      var lastName = req.query.name.split(" ")[1];
      knex('students').where({
        first_name: firstName,
        last_name: lastName
      })
      .select('*')
      .then(function(data) {
        res.send(data[0]);
      })
      .catch(function(err) {
        res.send('Could not find such student, please check student name.');
      })
    }
  },

  studentInfo: {
//
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
          newStudent.save()
              .then(function(student) {
                // util.createSession(req, res, newUser);
                res.send('new student created')
              });
          } else {
            res.send('Account already exists');
            // res.redirect('/signup');
        }
      })
    },

    get: function(req, res) {
      knex('students')
      .select('*')
      .then(function(data){
        res.send(data);
      })
    }
  },

  logs: {

    post: function(req,res) {
      var author = req.body.author;
      var student_id = req.body.id;
      var log = req.body.log;
      var types = req.body.types;
      var other = req.body.other;

      knex('students')
      .where('id', '=', student_id)
      .increment('logCount', 1)
      .then(function() {
        console.log('info updated');
      });

      var newLog = new Log({
        log: log,
        user: author,
        student_id: student_id,
        types: types,
        other: other
      })
      newLog.save()
        .then(function() {
          res.send('log saved')
      });
    },

    get: function(req, res) {
      knex.select('*').from('logs').join('students', {'students.id': 'logs.student_id'})
      .then(function(data){
          res.send(data);
      })
    }
  }
}
