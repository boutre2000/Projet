const express= require('express');
const router = express.Router();
const depCtrl = require('../controllers/departement');
const auth = require('../middleware/auth');
const admin = require('../middleware/isAdmin');




router.post('/',[auth,admin],depCtrl.createDep);
router.get('/', [auth,admin],depCtrl.listDep);
router.put('/:id', [auth,admin],depCtrl.editDep);

module.exports = router;