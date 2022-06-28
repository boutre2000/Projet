const express= require('express');
const router = express.Router();
const demPapCtrl= require('../controllers/demPapier');
const auth = require('../middleware/auth');
const admin = require('../middleware/isAdmin');


router.post('/add', auth, demPapCtrl.createDemPap);
router.get('/list', [auth,admin],demPapCtrl.listDemPapier);
router.get('/user', auth,demPapCtrl.checklistDemPapUser);
router.get('/preview/:id', auth,demPapCtrl.checkoneDemPap);
router.put('/repad/:id',auth,demPapCtrl.resDemPapier);


module.exports = router;