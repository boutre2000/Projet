
const Fct = require('../models/fonction');
const Joi = require('joi');
const { join } = require('lodash');


exports.createFct = (req,res)=> {

  /*const schema = Joi.object({
      NomD: Joi.string()
    })
   
    let valid = schema.validateAsync(req.body)
    res.send(valid);*/
   const fonct= new Fct({
   NomF:req.body.NomF })
     fonct.save()
     .then(()=> res.status(200).json('fonction enregistree !'))
     .catch(error=> res.status(400).json({error}))
 }

 exports.listFct =  (req,res)=>{
  Fct.find({},{_id:0,posteId:0,createdAt:0,updatedAt:0,__v:0}, function (err, docs) {
  if (err){
    res.status(400).json({err})
  }
  else{
  res.send(docs); } }); 
}

 exports.editFct = (req,res)=>{
       Fct.findOneAndUpdate({_id: req.params.id},{...req.body} ,(err ) =>{
    if(err){
         res.status(400).json({error: 'modification ne peut etre sauvegarder'})
    }else{
       res.status(200).json('modificaation sauvegarde' )  }  });};  