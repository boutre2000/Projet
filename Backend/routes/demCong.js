const express= require('express');
const router = express.Router();
const demCongCtrl= require('../controllers/demCong');
const auth = require('../middleware/auth');
const admin = require('../middleware/isAdmin');
const manag = require('../middleware/isManager');
const multer = require('../middleware/multerConfig');
const authz = require('../middleware/authorization');

router.post('/add',[auth,multer],demCongCtrl.createDemCong);
//router.put('/:id',[auth,multer], demCongCtrl.sendCause);
router.get('/fileview/:id',[auth, multer], demCongCtrl.viewCause);
router.get('/list', [auth,admin],demCongCtrl.checklistDemCg);
router.get('/group', [auth,manag],demCongCtrl.checklistDemCgGroup);
router.get('/user', auth,demCongCtrl.checklistDemCgUser);
router.get('/preview/:id', [auth,multer],demCongCtrl.checkoneDemCg);
router.put('/repad/:id',[auth,admin],demCongCtrl.resDemCongAdm);
router.put('/repma/:id', [auth,manag], demCongCtrl.resDemCongMan);


  module.exports = router;