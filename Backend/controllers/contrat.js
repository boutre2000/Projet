const req = require('express/lib/request');
const Cont = require('../models/contrat');
const Poste = require('../models/poste');
const moment = require('moment');
const { find } = require('lodash');




exports.createContrat =async  (req, res) => {
    let p= await Poste.find({"posteId":req.body.numP})
    if (!p) {
    return res
    .status(409)
    .json({ message: 'Cette section est vide' });
    }
    const cont = new Cont({
         dateEd: moment(req.body.dateEd,'YYYY-MM-DDT00:00:00').toDate(),
         posteId:p._id
        });
        cont.save()
          .then(() => res.status(201).json({ message: 'Contrat cree !' }))
          .catch(error => res.status(500).json({ error }))
   }

 exports.sendPj = (req, res, next) => {
    try{
       const file= req.file;
        Cont.findOneAndUpdate(
          { _id: req.params.id },
          {  pj: file.path},
          function (err, docs) {
            if (err) {
              res.status(409).json({ err})
            } else {
              res.status(201).json({ message: 'Objet enregistré !'})
            }
          }
        ); 
    }
    catch(error){
      res.status(400).send(error.message)
    }};

    exports.viewPj =(req, res) => {
        //return res.sendFile(path.join(`${__dirname}/../views/index.html`));
        Cont.findOne({_id:req.params.id},(err,contrat)=>{
          if(err){
            return res .status(500) .json({err});
          }else{
            return  res.download(contrat.pj);
          }
        })
        
      };

    exports.listCont=  (req,res)=>{
        Cont.find({...req.body},{_id:0,posteId:0,createdAt:0,updatedAt:0,__v:0},(err, docs)=> {
        if (err){
          res.status(400).json({err})
        }
        else{
        res.send(docs); } }); 
      }
      
       exports.editCont = (req,res)=>{
             Cont.findOneAndUpdate({_id: req.params.id},{...req.body} ,(err ) =>{
          if(err){
               res.status(400).json({error: 'modification ne peut etre sauvegardee'})
          }else{
             res.status(200).json('modificaation sauvegarde' )  }  });};  