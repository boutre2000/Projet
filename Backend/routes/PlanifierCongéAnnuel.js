// const express = require("express");
// const router = express.Router();
// const PlanifierCongéCtrl = require("../controllers/PlanifierCongéAnnuel");

// router.post("/", PlanifierCongéCtrl.planifierCongéA);
// router.get(
//   "/",
//   PlanifierCongéCtrl.ListerLesPlanificationDeCongéAnnuelPourAdmin
// );
// router.get(
//   "/:id",
//   PlanifierCongéCtrl.ListerLaPlanificationDeCongéAnnuelPourEmployé
// );

// module.exports = router;
const express = require("express");
const router = express.Router();
const PlanifierCongeCtrl = require("../controllers/PlanifierCongéAnnuel");
const auth = require("../middleware/auth");
const admin = require("../middleware/isAdmin");

router.post("/add", [auth, admin], PlanifierCongeCtrl.planifierCongéA);
router.get(
  "/list",
  [auth, admin],
  PlanifierCongeCtrl.ListerLesPlanificationDeCongéAnnuelPourAdmin
);
router.put("/edit/:id", [auth, admin], PlanifierCongeCtrl.editCon);
router.get("/getone/:id", [auth, admin], PlanifierCongeCtrl.getOneCong);

module.exports = router;
