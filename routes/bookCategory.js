var express = require('express');
var router = express.Router();
const bookCategoryController =require('../controllers/bookCategoryController')
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/query',bookCategoryController.query)
router.post('/insert',bookCategoryController.insert)
router.post('/delete',bookCategoryController.delete)
router.post('/update',bookCategoryController.update)
module.exports = router;
