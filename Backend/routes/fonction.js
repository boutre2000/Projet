const express= require('express');
const router = express.Router();
const fctCtrl = require('../controllers/fonction');
const auth = require('../middleware/auth');
const admin = require('../middleware/isAdmin');




//router.post('/', [auth,admin],ctCtrl.createFct);
//router.get('/', [auth,admin],fctCtrl.listFct);
//router.put('/:id', [auth,admin], fctCtrl.editFct);

module.exports = router;