const express = require("express");
const router = express.Router();
const registerEmpCtrl = require("../controllers/registerEmp");
const validEmpCtrl = require("../controllers/login");
const auth = require("../middleware/auth");
const admin = require("../middleware/isAdmin");
const manag = require("../middleware/isManager");

router.post("/ajout", [auth, admin], registerEmpCtrl.signupEmp);
router.put("/", validEmpCtrl.resetPass);
router.put("/UIE/:id", [auth, admin], registerEmpCtrl.updateInfoEmployee);
router.get("/List", [auth, admin], registerEmpCtrl.listEmployee);
//router.post("/ajout", registerEmpCtrl.signupEmp);
router.get("/ListManager", auth, registerEmpCtrl.listManager);
//router.get("/PIU", registerEmpCtrl.affichageInfoUser);
router.get("/emp/:id", [auth, admin], registerEmpCtrl.checkInfoEmp);
router.get("/user", auth, registerEmpCtrl.checkInfoUser);
router.put("/UIU", auth, registerEmpCtrl.updateInfoUser);
router.get("/group", [auth, manag], registerEmpCtrl.checkGroupeUser);
router.put("/:id", [auth, admin], registerEmpCtrl.assignManag);

module.exports = router;
