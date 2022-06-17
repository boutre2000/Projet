const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const loginRoutes = require("./routes/login");
const registerEmpRoutes = require("./routes/registerEmp");
const demConRoutes = require("./routes/demCong");
const PlanifierCongéAnnuelRoutes = require("./routes/PlanifierCongéAnnuel");
const depRoutes = require("./routes/departement");

const demConRoutes = require("./routes/demCong");
const demAbsRoutes = require("./routes/demAbs");
const presenceRoutes = require("./routes/presence");
const posteRoutes = require("./routes/poste");
const contratRoutes = require("./routes/contrat");
const demPapRoutes = require("./routes/demPapier");
const posteRoutes = require("./routes/poste");
const ComInterneRoutes = require("./routes/ComInterne");

mongoose
  .connect(
    "mongodb+srv://bout:bout@cluster0.l5dg8.mongodb.net/Doctrine?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
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
app.use(cors(corsOptions));

app.use(express.json());
app.use("/login", loginRoutes);
//app.use('/user', registerEmpRoutes);
//app.use('/resetPass', loginRoutes);
app.use("/demCong", demConRoutes);
//app.use('/',demAbsRoutes);
//app.use('/',presenceRoutes);
//app.use('/',depRoutes);
//app.use('/',posteRoutes);
//app.use('/',contratRoutes);
//mongodb+srv://bout:bout@cluster0.l5dg8.mongodb.net/Doctrine?retryWrites=true&w=majority

//app.use('/', loginRoutes);
//app.use('/', resetRoutes);
app.use("/AjoutEmp", registerEmpRoutes);
app.use("/ListEmpParManager", registerEmpRoutes);

//app.use("/ListManager", registerEmpRoutes);
//app.use("/AffichageInfoUser", registerEmpRoutes);

app.use("/ListEmployé", registerEmpRoutes);

//app.use('/resetPass', loginRoutes);
//app.use('/',demConRoutes);
//app.use('/',demAbsRoutes);
//app.use('/',presenceRoutes);
app.use("/dep", depRoutes);
//app.use('/',posteRoutes);
app.use("/DemPap", demPapRoutes);
app.use("/", contratRoutes);
app.use("/ComInterne", ComInterneRoutes);
app.use("/DeleteComInterne", ComInterneRoutes);
app.use("/ModifyComInterne", ComInterneRoutes);
app.use("/ListComInterne", ComInterneRoutes);

app.use("/PlanAnnualLeave", PlanifierCongéAnnuelRoutes);
app.use("/ListPlanAnnualLeave", PlanifierCongéAnnuelRoutes);

app.use("/fichier", express.static(path.join(__dirname, "fichier")));

module.exports = app;
