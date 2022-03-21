const express= require('express');
const router = express.Router();
const registerEmpCtrl = require('../controllers/registerEmp')

router.post('/',registerEmpCtrl.signupEmp);

 

  module.exports = router;