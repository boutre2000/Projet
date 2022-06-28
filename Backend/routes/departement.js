const express= require('express');
const router = express.Router();
const depCtrl = require('../controllers/departement');
const auth = require('../middleware/auth');
const admin = require('../middleware/isAdmin');




router.post('/add',[auth,admin],depCtrl.createDep);
router.get('/list',[auth,admin],depCtrl.listDep);
router.put('/edit/:id', [auth,admin],depCtrl.editDep);
router.get('/getone/:id',[auth,admin], depCtrl.getOneDep);

module.exports = router;