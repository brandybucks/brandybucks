var fakeData = require('../fakeData.json');
var knex = require('./config.js').knex;

knex.batchInsert('students', fakeData)
.then(function(err) {
	if(err){
		console.log('error has occured in inserting fakeData');
		throw err;
	} else {
		console.log('fakeData inserted successfully!')
	}
});