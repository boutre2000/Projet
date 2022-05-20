const express= require('express');
const router = express.Router();
const loginCtrl = require('../controllers/login')


router.post('/login',loginCtrl.signin);
router.post('/forgotPass',loginCtrl.forgotPass);
router.get('/reset',loginCtrl.resetPass);
router.put('/updatePass',loginCtrl.updatePass);

  module.exports = router;