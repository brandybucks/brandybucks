
var Promise = require('bluebird');
var knex = require('knex') ({
	client: 'mysql',
	connection: {
		host      : '127.0.0.1',
		username  : 'ROOT',
		password  : '',
		database  : 'myapp'
		charset   : 'utf8'

	},
	useNullAsDefault: true

});

var bookshelf = require('bookshelf')(knex);

//source: bookshelfjs.org

var Users = bookshelf.Model.extend({
	tableName: 'users'
})

var Student = bookshelf.Model.extend({
	tableName: 'students'
});
//user schemas:

//checks for a table's existence by tableName, resolving with a boolean to signal if the table exists
bookshelf.knex.schema.hasTable('students').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('students', function(student) {
      student.increments('id').primary();
      student.string('first_name', 100);
      student.string('last_name', 100);
      student.string('grade', 3);
      student.string('IEP', 100);
      student.string('pic', 100);
    }).then(function (table) {
 		console.log('Created Table', table);
		});
  }
});


bookshelf.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('users', function(user) {
      user.increments('id').primary();
      user.string('first_name', 100);
      user.string('last_name', 100);
      user.string('type', 100);
    }).then(function (table) {
 		console.log('Created Table', table);
		});
  }
});

module.exports = bookshelf;