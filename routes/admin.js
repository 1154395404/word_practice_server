var express = require('express');
var router = express.Router();
const userController =require('../controllers/adminController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/getAllUsers',userController.getAllUsers)
// router.post('/addUser',userController.addUser)
// router.put('/updateUser',userController.updateUser)
router.post('/register',userController.register)
router.post('/login',userController.login)
router.post('/update',userController.update)
router.get('/getInfo',userController.getInfo)
router.get('/logoff',userController.logoff)
router.get('/getAllUsers',userController.getAllUsers)
module.exports = router;
