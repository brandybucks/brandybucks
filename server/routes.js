var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes

router.post('/login', controller.login.post);

router.post('/signup', controller.signup.post);

router.get('/logout', controller.logout.get);

// router.get('/students/name', controller.query.get);

router.post('/students/name', controller.query.post);

router.get('/students/getAll', controller.studentInfo.get);
// router.post('/students', controller.)

router.get('/testGetTopSecretInfo', controller.testGetTopSecretInfo.get);


module.exports = router;

