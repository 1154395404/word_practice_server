var express = require('express');
var router = express.Router();
const userController =require('../controllers/userController')

/* GET users listing. */



router.post('/register',userController.register)
router.post('/login',userController.login)
router.get('/getInfo',userController.getInfo)
router.post('/delete',userController.delete)
router.post('/update',userController.update)
router.get('/getUserList',userController.getUserList)




module.exports = router;
