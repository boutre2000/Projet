const express= require('express');
const router = express.Router();
const postCtrl= require('../controllers/poste');
const auth = require('../middleware/auth');
const admin = require('../middleware/isAdmin');




router.post('/',[auth,admin],postCtrl.createPoste);
//router.get('/',[auth,admin],postCtrl.listPost);
//router.put('/', [auth,admin],depCtrl.editDep);
//router.get('/:id', auth,postCtrl.checkonePst)

module.exports = router;