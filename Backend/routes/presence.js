const express= require('express');
const router = express.Router();
const presenceCtrl= require('../controllers/presence');
const auth = require('../middleware/auth');
const admin = require('../middleware/isAdmin');
const manag = require('../middleware/isManager');
const multer = require('../middleware/multerConfig');
const authz = require('../middleware/authorization');

//router.post('/',[auth,admin,multer], presenceCtrl.savePres);
router.post('/set',[auth,admin,multer], presenceCtrl.setPres);
router.put('/:id',[auth,admin], presenceCtrl.updatePres);
router.get('/list',[auth,admin],presenceCtrl.getPres);
//router.get('/', [auth,admin],presenceCtrl.checkAnomaliePres);
router.get('/getone/:id',auth,presenceCtrl.checkoneAss);
router.get('/getonepres/:id',auth,presenceCtrl.checkonePres);
router.get('/user',auth, presenceCtrl.checkPresUser);



  module.exports = router;