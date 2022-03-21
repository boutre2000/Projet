const express= require('express');
const router = express.Router();
const registrationCtrl = require('../controllers/registerAdmin')

router.post('/',registrationCtrl.signup);

 

  module.exports = router;