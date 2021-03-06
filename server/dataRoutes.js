var controller = require('./controllers/dataControllers');
var router = require('express').Router();



router.get('/students/name', controller.query.get);

router.get('/students/getAll', controller.studentInfo.get);

router.post('/students', controller.studentInfo.post);

router.post('/logs', controller.logs.post);

router.get('/logs/getAll', controller.logs.get);


module.exports = router;

