var Promise = require('bluebird');

var connection;

if (process.env.NODE_ENV === 'production') {
  connection = process.env.CLEARDB_DATABASE_URL;
} else {
  connection = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'myapp',
    charset: 'utf8'
  }
}

var knex = require('knex') ({
  client: 'mysql',
  connection: connection,
  useNullAsDefault: true
});


var bookshelf = require('bookshelf')(knex);

//source: bookshelfjs.org

// var Users = bookshelf.Model.extend({
//   tableName: 'users'
// })

// var Student = bookshelf.Model.extend({
//   tableName: 'students'
// });
//user schemas:

//checks for a table's existence by tableName, resolving with a boolean to signal if the table exists
// knex.schema.dropTableIfExists('students');
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

// knex.schema.dropTableIfExists('users');
bookshelf.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('users', function(user) {
      user.increments('id').primary();
      user.string('first_name', 100);
      user.string('last_name', 100);
      user.string('type', 100);

      // does password go here? and do we want a username field?
      user.string('username', 100);
      user.string('password', 200);
      user.timestamps();

    }).then(function (table) {
    console.log('Created Table', table);
    });
  }
});

bookshelf.knex.schema.hasTable('users_students').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('users_students', function(table) {
      table.integer('student_id').unsigned();
      table.foreign('student_id').references('students.id');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('users.id');
    }).then(function (table) {
    console.log('Created Table3', table);
    });
  }
});


bookshelf.knex.schema.hasTable('logs').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('logs', function(table) {
      table.increments('id').primary();
      table.text('log');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user_id');
      table.string('user',100);
      table.integer('student_id').unsigned();
      table.foreign('student_id').references('student_id');
      table.integer('types');
      table.string('other', 200);
    }).then(function (table) {
    console.log('Created Table4', table);
    });
  }
});




module.exports = bookshelf;