
const dep = require('../models/departement');
const Joi = require('joi');
const { join } = require('lodash');



exports.createDep = (req,res)=> {

 /*const schema = Joi.object({
     NomD: Joi.string()
   })
  
   let valid = schema.validateAsync(req.body)
   res.send(valid);*/
  const depart= new dep({
  NomD:req.body.NomD })
    depart.save()
    .then(()=> res.status(200).json('departement enregistre !'))
    .catch(error=> res.status(400).json({error}))
}

exports.listDep = async (req,res)=>{
  dep.find({},{_id:0,posteId:0,createdAt:0,updatedAt:0,__v:0}, function (err, docs) {
  if (err){
    res.status(400).json({err})
  }
  else{
  res.send(docs); } }); }
 exports.editDep = (req,res)=>{
       dep.findOneAndUpdate({_id: req.params.id},{...req.body} ,(err ) =>{
    if(err){
         res.status(400).json({error: 'modification ne peut etre sauvegarder'})
    }else{
       res.status(200).json('modificaation sauvegarde' )  }  });};    