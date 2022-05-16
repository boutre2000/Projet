const express= require('express');
const router = express.Router();
const loginCtrl = require('../controllers/login')


router.post('/',loginCtrl.signin);
//router.post('/',loginCtrl.forgotPass);
//router.get('/reset',loginCtrl.resetPass);
//router.put('/',loginCtrl.updatePass);

  module.exports = router;