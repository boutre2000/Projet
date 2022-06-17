const express = require("express");
const router = express.Router();
const PlanifierCongéCtrl = require("../controllers/PlanifierCongéAnnuel");

router.post("/", PlanifierCongéCtrl.planifierCongéA);
router.get(
  "/",
  PlanifierCongéCtrl.ListerLesPlanificationDeCongéAnnuelPourAdmin
);
router.get(
  "/:id",
  PlanifierCongéCtrl.ListerLaPlanificationDeCongéAnnuelPourEmployé
);

module.exports = router;
