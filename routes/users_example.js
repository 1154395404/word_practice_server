var express = require('express');
var router = express.Router();
const userController =require('../controllers/userController_example')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllUsers',userController.getAllUsers)
router.post('/addUser',userController.addUser)
router.put('/updateUser',userController.updateUser)
router.delete('/deleteUser',userController.deleteUser)



router.get('/query',userController.query)
router.post('/insert',userController.insert)
router.post('/delete',userController.delete)
router.post('/update',userController.update)
module.exports = router;
