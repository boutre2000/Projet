const express= require('express');
const router = express.Router();
const loginCtrl = require('../controllers/login')


//router.post('/signin',loginCtrl.signin);
router.put('/',loginCtrl.forgotPass);
//router.put('/',loginCtrl.resetPass);

  module.exports = router;