const express = require("express");
const router = express.Router();
const demAbsCtrl = require("../controllers/demAbs");
const auth = require("../middleware/auth");
const admin = require("../middleware/isAdmin");
const manag = require("../middleware/isManager");
const multer = require("../middleware/multerConfig");
const authz = require("../middleware/authorization");

router.post("/add", [auth, multer], demAbsCtrl.createDemAbs);
//router.put("/:id",[auth,multer], demAbsCtrl.sendJust);
router.get("/fileview/:id", [], demAbsCtrl.viewJust);
router.get("/list", [auth, admin], demAbsCtrl.checklistDemAbs);
//router.get("/group", [auth, manag], demAbsCtrl.checklistDemAbsGroup);
router.get("/user", [auth], demAbsCtrl.checklistDemAbsUser);
router.get("/previewau/:id", [auth, multer], demAbsCtrl.checkoneDemAbs);
router.put("/repma/:id", [auth, authz], demAbsCtrl.resDemAbsMan);

module.exports = router;
