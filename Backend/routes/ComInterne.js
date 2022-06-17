const express = require("express");
const router = express.Router();
const ComInterneCtrl = require("../controllers/ComInterne");

router.post("/", ComInterneCtrl.ajouterComIn);
//router.delete("/:id", ComInterneCtrl.supprimerComIn);
router.put("/:id", ComInterneCtrl.modifierComInterne);
router.get("/", ComInterneCtrl.listerComInternePourAdmin);
router.get("/:id", ComInterneCtrl.listerComInternePourEmployé);

module.exports = router;
