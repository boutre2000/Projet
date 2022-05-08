const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const loginRoutes = require('./routes/login');
const resetRoutes = require('./routes/reset');
const registerEmpRoutes = require('./routes/registerEmp');
const demConRoutes = require('./routes/demCong');
const demAbsRoutes = require('./routes/demAbs');
const presenceRoutes = require('./routes/presence');
const depRoutes = require('./routes/departement');
const fctRoutes = require('./routes/fonction');
const posteRoutes = require('./routes/poste');
const contratRoutes = require('./routes/contrat');

mongoose.connect('mongodb+srv://bout:bout@cluster0.l5dg8.mongodb.net/Doctrine?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
 
 app.use(express.json());
//app.use('/', loginRoutes);
 //app.use('/', resetRoutes);
app.use('/', registerEmpRoutes);
//app.use('/resetPass', loginRoutes);
//app.use('/',demConRoutes);
//app.use('/',demAbsRoutes);
//app.use('/',presenceRoutes);
//app.use('/',depRoutes);
//app.use('/',fctRoutes);
//app.use('/',posteRoutes);
//app.use('/',contratRoutes);
 app.use('/fichier', express.static(path.join(__dirname, 'fichier')));
 

  module.exports = app;

  
  
  
 
 
  
  



