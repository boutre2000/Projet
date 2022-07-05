const req = require('express/lib/request');
const Abs = require('../models/demAbs');
const User = require('../models/user');
const moment = require('moment');


exports.createDemAbs = (req, res) => {
  const file = req.file;
  const abs = new Abs({
    ...req.body,
    // dateFin: moment(req.body.dateFin, "YYYY-MM-DDT00:00:00").toDate(),
    // dateDebut: moment(req.body.dateDebut, "YYYY-MM-DDT00:00:00").toDate(),
    userId: req.user,
    justification: file.path,
  });
  abs
    .save()
    .then(() => res.status(201).json({ message: "request saved !" }))
    .catch((error) => res.status(400).json({ error }));
 }

exports.sendJust = (req, res, next) => {
try{
   const file= req.file;

    Abs.findOneAndUpdate(
      { _id: req.params.id },
      {  justification: file.path},
      function (err, docs) {
        if (err) {
          res.status(409).json({ err});
        } else {
          res.status(201).json({ message: 'Objet enregistré !'})
        }
      }
    ); 
}
catch(error){
  res.status(500).send(error.message)
}
};
exports.viewJust =(req, res) => {
  //return res.sendFile(path.join(`${__dirname}/../views/index.html`));
  Abs.findOne({_id:req.params.id},(err,demande)=>{
    if(err){
      return res .status(400) .json({ message: 'demande does not exist' });
    }else{
      return  res.download(demande.justification);
    }
  })
  
};



 exports.checklistDemAbsUser = (req, res,next) => {
  Abs.find({$and: [{"userId" : req.user},{...req.body}]})
  .then(demande => {
     if (!demande) 
     return res.status(409).json({ error: 'No request !' });
     res.status(200).json(demande); })
   .catch(error => res.status(500).json({ error }))
     
}

exports.checklistDemAbs =async   (req, res,next) => {
  
  Abs.find({ ...req.body}).populate({path: 'userId',
  populate:{path: 'managId', select: 'Nom Prenom' },select: 'Nom Prenom'})
  .then((dem)=>{
    if (!dem) {
      return res.status(401).json({ error: 'cette section est vide !' }); } 
     
           res.status(200).json(dem); 
    })
    .catch(error => res.status(500).json({ error }));  
         
         }
       
      
         
 



// exports.checklistDemCgGroup = async (req, res,next) => {
//   let t= new Array();
//        let users= await  User.find({managId : req.user})
//         if (!users) 
//         return res.status(401).json({ error: 'Pas de groupe pour ce manager !' });
//        for(let i=0; i<users.length; i++){
//        let d=await  Abs.find({$and: [{"userId" : users[i]._id},{...req.body}]})
//             if (!d) 
//             return res.status(401).json({ error: 'Cette section est vide !' });
//             t[i]={
//               Nom: users[i].Nom,
//               Prenom: users[i].Prenom,
//               Date_Debut: dem[i].dateDebut,
//               Date_Fin: dem[i].dateFin,
//               Justification: dem[i].justification,
//               Etat: dem[i].etat
//             }
//             res.status(200).json(t);      
//         }
//       }


exports.checklistDemCgGroup =  async (req, res,next) => {
  let uids=  new Array();
        let i=0;
      
        User.find({managId : req.user})
        .then((users)=>{   
          if(!users)
          return res.status(401).json({ error: 'Cette section est vide !' });  
        
   
        users.map((user=>{
          
          uids[i] =user._id;
            i++;
        }))
        
        console.log(users);
        Abs.find({$and: [{userId : { $in: uids } },{...req.body}]}).populate({path: 'userId',
        //match:{ managId: { $eq: req.user}},
         select: 'Nom Prenom'})
         .then((d)=>{
          res.status(200).json(d);
         // res.write(d);
      })   
        .catch(error => res.status(500).json({ error }));   
        
        
    })

    .catch(error => res.status(500).json({ error })); 
    
    }

exports.checkoneDemAbs =   (req, res,next) => {

  Abs.findById(req.params.id).populate({path: 'userId',
   populate:{path: 'managId', select: 'Nom Prenom' },select: 'Nom Prenom'})
   .then((d)=>{
       res.status(200).json(dem);   
})
.catch(error => res.status(500).json({ error })); 
}

 
 exports.resDemAbsMan = (req,res)=> {
        Abs.findOneAndUpdate({_id: req.params.id}, {etat: req.body.etat}, (err) =>{
   if(err){
      return res.status(400).json({error})
    }else{
            res.status(200).json('reponse sauvegardee')
            }
        })
       }
     
 