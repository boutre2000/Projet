const express = require('express');
const app = express();
const mongoose = require('mongoose');
const loginRoutes = require('./routes/login');
const registrationRoutes = require('./routes/registerAdmin');
const resetRoutes = require('./routes/reset');
const registerEmpRoutes = require('./routes/registerEmp');

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
 app.use('/', loginRoutes);
 //app.use('/', resetRoutes);
 // app.use('/', registrationRoutes);
 //app.use('/', registerEmpRoutes);
  //app.use('/resetPass', loginRoutes);
 
 

  module.exports = app;

  
  
  
 
 
  
  



