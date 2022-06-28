const User = require('../models/user');
const dep = require('../models/departement');
const Joi = require('joi');
const { join } = require('lodash');



exports.createDep = async (req,res)=> {

 /*const schema = Joi.object({
     NomD: Joi.string()
   })
  
   let valid = schema.validateAsync(req.body)
   res.send(valid);*/
   let user= await User.findOne({ email: req.body.email})
    if (!user) {
    return res
    .status(409)
    .json('Cette section est vide' );
    }
  const depart= new dep({
  NomD:req.body.NomD,
  RespId: user._id

})
    depart.save()
    .then(()=> res.status(200).json('departement enregistre !'))
    .catch(error=> res.status(400).json({error}))
}





exports.listDep = async (req,res)=>{
  dep.find({ ...req.body},{createdAt:0,updatedAt:0,__v:0}).populate("RespId", "Nom Prenom")
  .then((d)=>{
   if(!d){
     return res.status(401).json({ error: 'cette section est vide !' });
   }
   res.status(200).json(d);
  })
  .catch(error => res.status(500).json({ error }))
 } 
 exports.getOneDep = async (req,res)=>{
  dep.findById(req.params.id,{createdAt:0,updatedAt:0,__v:0}).populate("RespId", "Nom Prenom email")
  .then((d)=>{
   if(!d){
     return res.status(401).json({ error: 'cette section est vide !' });
   }
   res.status(200).json(d);
  })
  .catch(error => res.status(500).json({ error }))
 } 

 exports.editDep = async (req,res)=>{
  let user= await User.findOne({ email: req.body.email})
  if (!user) {
  return res
  .status(409)
  .json('Cette section est vide' );
  }
       dep.findOneAndUpdate({_id: req.params.id},{email: req.body.email, RespId: user._id} ,(err ) =>{
    if(err){
         res.status(400).json({error: 'modification ne peut etre sauvegarder'})
    }else{
       res.status(200).json('modificaation sauvegarde')  }  });};    