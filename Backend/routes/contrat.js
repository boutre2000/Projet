const express = require("express");
const router = express.Router();
const contCtrl = require("../controllers/contrat");
const auth = require("../middleware/auth");
const admin = require("../middleware/isAdmin");
const multer = require("../middleware/multerConfig");

router.post("/add", [auth, admin, multer], contCtrl.createContrat);
router.get("/list", [auth, admin], contCtrl.listCont);
router.put("/edit/:id", [auth, admin], contCtrl.editCont);
router.put("/sendpj/:id", [auth, admin, multer], contCtrl.sendPj);
router.get("/downloadPj/:id", [auth, multer], contCtrl.viewPj);
router.get("/usercont", auth, contCtrl.checkContUser);
router.get("/getone/:id", auth, contCtrl.getOneCont);

module.exports = router;
