var express = require('express');
var router = express.Router();
const bookController =require('../controllers/bookController')
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/query',bookController.query)
router.get('/query_c',bookController.query_c)
router.get('/query_my_book',bookController.query_my_book)
router.get('/getOneBook',bookController.getOneBook)
router.post('/insert',bookController.insert)
router.post('/delete',bookController.delete)
router.post('/update',bookController.update)



router.get('/viewTodayAddList',bookController.viewTodayAddList)
router.get('/viewReview',bookController.viewReview)
module.exports = router;
