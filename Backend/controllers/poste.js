const post = require('../models/poste');
const Dep = require('../models/departement');
const User = require('../models/user');
const Fct = require('../models/fonction');
const Joi = require('joi');
const { join } = require('lodash');



exports.createPoste =  async (req,res)=>{

  const schema = Joi.object({
     
     Situation: Joi.string(),
     Salaire: Joi.number(),
     numP: Joi.number(),
     StatusP : Joi.string(),
      DateE: Joi.date(),
      DateS: Joi.date(),
      NomD : Joi.string(),
      NomF : Joi.string(),
     
  })
  
   let valid = await schema.validateAsync(req.body)
   res.send(valid);
   let user= await User.find({$and: [{"Nom" : req.body.Nom},{"Prenom":req.body.Prenom}]})
    if (!user) {
    return res
    .status(409)
    .json({ message: 'Cette section est vide' });
    }
   const dep = await Dep.findOne({NomD:req.body.NomD});
    if (!dep) {
    return res
    .status(409)
    .json({ message: 'Departement n existe pas' });
    }
    const fct = await Fct.findOne({NomF:req.body.NomF});
    if (!fct) {
    return res
    .status(409)
    .json({ message: 'fonction n existe pas' });
    }
  const RequestPost= new post({
    numP: req.body.numP,
    Situation:req.body.Situation,
    Salaire:req.body.Salaire,
    StatusP:req.body.StatusP,
    DateE:req.body.DateE,
    DateS:req.body.DateS,
    depId:dep._id,
    fonctionId:fct._id,
    userId:user._id
                          })
    
    RequestPost.save()
    .then(()=> res.status(200).json({message:'poste enregistre !'}))
    .catch(error=> res.status(400).json({error}))

}



    
 exports.listPost = async (req, res,next) => {
  
  let t= new Array();
  let p= await  post.find({ ...req.body})
    if (!p) {
      return res.status(401).json({ error: 'cette section est vide !' }); } 
      for(let i=0;i<dem.length;i++){
      let user= await User.findById(dem[i].userId)
      let dep= await Dep.findById(dem[i].depId)
      let fct= await Fct.findById(dem[i].fonctionId)

     
        t[i]={
          Nom: user.Nom,
          Prenom: user.Prenom,
          Numero: dem[i].numP,
          Date_Entree: dem[i].dateE,
          Date_Sortie: dem[i].dateS,
          Salaire: dem[i].Salaire,
          Situation: dem[i].Situation,
          StatusP: dem[i].StatusP,
          Departement: dep.NomD,
          Fonction: fct.NomF
           } }
           res.status(200).json(t);   }

 exports.checkonePst = async  (req, res,next) => {
     let p= await  post.findById(req.params.id)
       if( !p){
            res.status(500).json('error')  }
     let user= await User.findById(d.userId)
        if(  !user){
       res.status(500).json( 'error' )    }
       let dep= await Dep.findById(dem[i].depId)
       let fct= await Fct.findById(dem[i].fonctionId)
 
         t[i]={
           Nom: user.Nom,
           Prenom: user.Prenom,
           Numero: dem[i].numP,
           Date_Entree: dem[i].dateE,
           Date_Sortie: dem[i].dateS,
           Salaire: dem[i].Salaire,
           Situation: dem[i].Situation,
           StatusP: dem[i].StatusP,
           Departement: dep.NomD,
           Fonction: fct.NomF
            } 
            res.status(200).json(t);   }


    exports.editPost = (req,res)=>{
       const pst={
        ...req.body

       };
      PostModels.findOneAndUpdate({_id: req.params.id},{$set:pst}, {new: true}, (err ) =>{
    if(err){
         res.status(400).json({error: 'can not save response'})
    }else{
       res.status(200).json('reponse sauvegarder' )
            }    });
           } ;   