const express= require('express');
const router = express.Router();
const registerEmpCtrl = require('../controllers/registerEmp')
const validEmpCtrl= require('../controllers/login')
const auth = require('../middleware/auth');
const admin = require('../middleware/isAdmin');
const manag = require('../middleware/isManager');

//router.post('/',[auth,admin],registerEmpCtrl.signupEmp);
//router.put('/',auth,registerEmpCtrl.updateInfoUser);
//router.put('/:id',[auth,admin],registerEmpCtrl.updateInfoEmployee);
router.get('/',registerEmpCtrl.listEmployee);
//router.get('/:id',registerEmpCtrl.checkInfoEmp);
//router.get('/:id',registerEmpCtrl.checkInfoUser);
//router.get('/',[auth,manag],registerEmpCtrl.checkGroupeUser);

 

  module.exports = router;