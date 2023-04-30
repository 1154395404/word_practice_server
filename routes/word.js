var express = require('express');
var router = express.Router();
const wordController =require('../controllers/wordController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/query',wordController.query)
router.post('/insert',wordController.insert)
router.post('/delete',wordController.delete)
router.post('/update',wordController.update)
module.exports = router;
