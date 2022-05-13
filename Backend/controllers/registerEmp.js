const User = require('../models/user');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');


   
exports.signupEmp = async (req, res) => {
   if(!req.body.email){
    res.status(400).json({ error:"Veuillez remplir le champ email" })
   }
   if(req.body.dateNaissance){
    req.body.dateNaissance=  moment(req.body.dateNaissance,'YYYY-MM-DDT00:00:00').toDate();
  }
   User.findOne({email: req.body.email})
    .then((userEm)=>{
      if(userEm){
        res.status(409).json({ error:"Utilisateur avec cet email est deja cree" })
      }  })
      .catch(error => res.status(400).json({ error }));
  let manag= await User.findOne({email: req.body.manageremail})
  if(!manag){
    res.status(409).json({ error:"Ce manager n existe pas" })
  }
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: req.body.email,
        password: hash,
        managId: manag._id,
        ...req.body
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
    
  
}
 
// Modifier ses propres coords
exports.updateInfoUser = async (req,res)=> {
  if(req.body.password){
    req.body.password= await  bcrypt.hash(req.body.password, 10)
    if (!req.body.password) {
      return res.status(401).json({ error });
    }
  }
  User.findOneAndUpdate({_id: req.user}, {...req.body}, (err) =>{
if(err){
return res.status(400).json({error: 'Modification peut etre effectuee'})
}else{
      res.status(200).json('Mdification effectuee')
      }
  })
 }
// Admin modify  employe coords
 exports.updateInfoEmployee = (req,res)=> {
 
      if(req.body.password){
          return res.status(404).json({ error: 'Mot de passe ne peut etre modifie!' });
        }
        if(req.body.dateNaiss){
           req.body.dateNaiss=  moment(req.body.dateNaiss,'YYYY-MM-DDT00:00:00').toDate();
        }
  User.findOneAndUpdate({_id: req.params.id}, {...req.body}, (err) =>{
      if(err){
     return res.status(400).json({error: 'Modification ne peut etre effectuee'})
      }  
      res.status(200).json('Modification effectuee')
      
  })
 }
 


exports.listEmployee=  (req,res,next) => {
  
  User.find({...req.body},{password:0,role:0,_id:0,createdAt:0,updatedAt:0,__v:0}).populate("managId","Nom Prenom")
  .then(user => {
    if (!user) 
     return res.status(409).json({ error: 'Cette section est vide !' });
    res.status(200).json(user);   })
  .catch(error => res.status(500).json({ error }));   
}


    
   // User gets his personnel information
  
      exports.checkInfoUser=(req,res)=>{
        User.findOne({_id: req.user}).populate("managId","Nom Prenom")
        .then(user => {
          if (!user) 
            return res.status(401).json({ error: 'No user !' });
           res.status(200).json(user);   })
        .catch(error => res.status(500).json({ error })); 
      }
      
      // Admin get one user's information

exports.checkInfoEmp=(req,res)=>{
  User.findOne({_id:req.params.id},{password:0,role:0,_id:0,createdAt:0,updatedAt:0,__v:0}).populate("managId","Nom Prenom")
  .then(user => {
    if (!user) 
      return res.status(401).json({ error: 'No user !' });
     res.status(200).json(user);   })
  .catch(error => res.status(500).json({ error })); 
}

   //Manager gets list of his group's user
exports.checkGroupeUser=(req,res)=>{
  User.find({$and: [{managId : req.user},{...req.body}]},{password:0,role:0,_id:0,createdAt:0,updatedAt:0,__v:0})
  .then(user => {
    if (!user) 
     return res.status(401).json({ error: 'No user !' });
    res.status(200).json(user);   })
  .catch(error => res.status(500).json({ error })); 
}

