const req = require('express/lib/request');
const Cong = require('../models/demCong');
const User = require('../models/user');
const moment = require('moment');
const { func } = require('joi');




exports.createDemCong = (req, res) => {
        //var n= req.body.dateDebut.toString();
       const file= req.file;
        const cong = new Cong({
         ...req.body,
         
          userId: req.user,
          cause: file.path
        });
        cong.save()
          .then(() => res.status(201).json( 'request saved !' ))
          .catch(error => res.status(500).json({ error }));
 }

exports.sendCause = (req, res, next) => {
try{
   const file= req.file;

    Cong.findOneAndUpdate(
      { _id: req.params.id },
      {  cause: file.path},
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
}
};
exports.viewCause =(req, res) => {
  //return res.sendFile(path.join(`${__dirname}/../views/index.html`));

  Cong.findOne({_id:req.params.id},(err,demande)=>{
    if(err)
      return res .status(500) .json({err});
    
      // res.send(demande.cause);
      res.sendFile(__dirname + demande.cause);
    
  })
  
};



 exports.checklistDemCgUser = (req, res,next) => {
    
    Cong.find({$and: [{"userId" : req.user},{...req.body}]})
     .then(demande => {
        if (!demande) 
        return res.status(401).json({ error: 'No request !' });
        res.status(200).json(demande);    })
      .catch(error => res.status(500).json({ error }))

}

exports.checklistDemCg =  (req, res,next) => {
 
   Cong.find({ ...req.body}).populate({path: 'userId', select: 'Nom Prenom'})
 .then((dem)=>{
   if (!dem) {
     return res.status(401).json({ error: 'cette section est vide !' }); } 
    
          res.status(200).json(dem); 
   })
   .catch(error => res.status(500).json({ error }));  
        
        }
      
       

exports.checklistDemCgGroup =  async (req, res,next) => {
  let uids=  new Array();
        let i=0;
      
        User.find({managId : req.user})
        .then((users)=>{   
          if(!users)
          return res.status(401).json({ error: 'Cette section est vide !' });  
        
        
        console.log('hey')
        users.map((user=>{
          
          uids[i] =user._id;
            i++;
        }))
        
        console.log(users);
        Cong.find({$and: [{userId : { $in: uids } },{...req.body}]}).populate({path: 'userId',
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
exports.checkoneDemCg =  (req, res,next) => {
   Cong.findById(req.params.id).populate({path: 'userId',
   select: 'Nom Prenom'})
   .then((d)=>{
       res.status(200).json(d);   
})
.catch(error => res.status(500).json({ error })); 
}

 exports.resDemCongAdm = (req,res)=> {
   Cong.findOneAndUpdate({_id: req.params.id}, { ...req.body}, (err) =>{
        if(err){
         return res.status(400).json({error})
        } else {  res.status(200).json('modification sauvegardee')}
    })
 }
 exports.resDemCongMan = (req,res)=> {
        Cong.findOneAndUpdate({_id: req.params.id}, {autoManag: req.body.autoManag}, (err) =>{
   if(err){
      return res.status(400).json({error})
    }else{
           
            res.status(200).json('modification sauvegardee')
            }
        })
       }
     
 