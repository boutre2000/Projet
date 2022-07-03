// const express = require("express");
// const router = express.Router();
// const ComInterneCtrl = require("../controllers/ComInterne");

// router.post("/", ComInterneCtrl.ajouterComIn);
// //router.delete("/:id", ComInterneCtrl.supprimerComIn);
// router.put("/:id", ComInterneCtrl.modifierComInterne);
// router.get("/", ComInterneCtrl.listerComInternePourAdmin);
// router.get("/:id", ComInterneCtrl.listerComInternePourEmployé);

// module.exports = router;
const express = require("express");
const router = express.Router();
const ComInterneCtrl = require("../controllers/cominterne");
const auth = require("../middleware/auth");
const admin = require("../middleware/isAdmin");
router.post("/add", [auth, admin], ComInterneCtrl.ajouterComIn);
router.put("/edit/:id", [auth, admin], ComInterneCtrl.editcom);
router.get("/list", [auth, admin], ComInterneCtrl.listerCom);
router.get("/getone/:id", [auth, admin], ComInterneCtrl.getOneCom);

module.exports = router;
