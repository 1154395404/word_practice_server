var express = require('express');
var router = express.Router();
const activityController =require('../controllers/activityController')
/* GET users listing. */

router.get('/query',activityController.query)
router.get('/queryBanner',activityController.queryBanner)

router.get('/getCloudBanner',activityController.getCloudBanner)
router.post('/insert',activityController.insert)
router.post('/importSort',activityController.importSort)
router.post('/delete',activityController.delete)

router.post('/update',activityController.update)

module.exports = router;
