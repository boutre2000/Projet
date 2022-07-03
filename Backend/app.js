var express = require("express");
require("dotenv").config();
var app = express();
var cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const loginRoutes = require("./routes/login");
const registerEmpRoutes = require("./routes/registerEmp");
const depRoutes = require("./routes/departement");
const morgan = require("morgan");
const demConRoutes = require("./routes/demCong");
const demAbsRoutes = require("./routes/demAbs");
const congeRoutes = require("./routes/PlanifierCongéAnnuel");
const contratRoutes = require("./routes/contrat");
const demPapRoutes = require("./routes/demPapier");
const ComInterneRoutes = require("./routes/ComInterne");
const posteRoutes = require("./routes/poste");

// const cookieParser = require('cookie-parser'); // CSRF Cookie parsing
// const bodyParser = require('body-parser'); // CSRF Body parsing
// var csrf = require('csurf');
// var csrfProtect = csrf({ cookie: true })

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors());
app.use(morgan("combined"));

app.use(cors(corsOptions));

app.use(express.json());
app.use("/login", loginRoutes);
app.use("/demCong", demConRoutes);
app.use("/demAbs", demAbsRoutes);

app.use("/AjoutEmp", registerEmpRoutes);
app.use("/ListEmpParManager", registerEmpRoutes);
app.use("/User", registerEmpRoutes);
//app.use("/ListManager", registerEmpRoutes);
//app.use("/AffichageInfoUser", registerEmpRoutes);

app.use("/dep", depRoutes);
app.use("/post", posteRoutes);
app.use("/contrat", contratRoutes);

app.use("/DemPap", demPapRoutes);
app.use("/", contratRoutes);
app.use("/conge", congeRoutes);
app.use("/ComInterne", ComInterneRoutes);
// app.use("/ComInterne", ComInterneRoutes);
// app.use("/DeleteComInterne", ComInterneRoutes);
// app.use("/ModifyComInterne", ComInterneRoutes);
// app.use("/ListComInterne", ComInterneRoutes);

// app.use("/PlanAnnualLeave", PlanifierCongéAnnuelRoutes);
// app.use("/ListPlanAnnualLeave", PlanifierCongéAnnuelRoutes);

app.use("/fichier", express.static(path.join(__dirname, "fichier")));

module.exports = app;
