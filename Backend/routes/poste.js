const express= require('express');
const router = express.Router();
const postCtrl= require('../controllers/poste');
const auth = require('../middleware/auth');
const admin = require('../middleware/isAdmin');




router.post('/add',postCtrl.createPoste);
router.get('/list',[auth,admin],postCtrl.listPost);
router.put('/edit/:id',[auth,admin], postCtrl.editPost);
router.get('/preview/:id',auth, postCtrl.checkonePst);
router.get('/user',auth, postCtrl.checkPstUser)

module.exports = router;