const req = require('express/lib/request');
const Papier = require('../models/demPapier');
const User = require('../models/user');





exports.createDemPap = (req, res) => {
        
         
        const p = new Papier({
         ...req.body,
          userId: req.user
        });
        p.save()
          .then(() => res.status(201).json('request saved !' ))
          .catch(error => res.status(500).json({ error }));
    }

    exports.checklistDemPapUser = (req, res,next) => {
    
        Papier.find({$and: [{"userId" : req.user},{...req.body}]})
         .then(demande => {
            if (!demande) 
            return res.status(401).json({ error: 'No request !' });
            res.status(200).json(demande);    })
          .catch(error => res.status(500).json({ error }))
    
    }



    exports.listDemPapier = async (req,res)=>{
        

      Papier.find({ ...req.body}).populate({path: 'userId',select: 'Nom Prenom'})
  .then((dem)=>{
    if (!dem) {
      return res.status(401).json({ error: 'cette section est vide !' }); } 
     
           res.status(200).json(dem); 
    })
    .catch(error => res.status(500).json({ error }));  
         
         }
           
            

      exports.checkoneDemPap = async  (req, res,next) => {
        
        Papier.findById(req.params.id).populate({path: 'userId',select: 'Nom Prenom'})
        .then((dem)=>{
          if (!dem) {
            return res.status(401).json({ error: 'cette section est vide !' }); } 
           
                 res.status(200).json(dem); 
          })
          .catch(error => res.status(500).json({ error }));  
               
               }
           
       

      exports.resDemPapier = (req,res)=> {
        Papier.findOneAndUpdate({_id: req.params.id}, {etatD: req.body.etatD}, (err) =>{
   if(err){
      return res.status(400).json({error})
    }else{
           
            res.status(200).json('modification sauvegardee')
            }
        })
       }



       exports.senddoc= async (req,res)=>{
       
        Papier.findOne({_id: req.params.id}, (err,p) =>{
          if(err){
             return res.status(400).json({error})
           }else{
                  
              User.findById(p.userId)
              .then(user=>{
            if(!user){
              return res.status(400).json({error})
            }


        var transporter = nodemailer.createTransport({
          service: 'Gmail',
          port: 465,
          auth: {
            user: 'ib_refas@esi.dz',
            pass: '31029810'
          }
        });
        const mailOptions={
          from :'ib_refas@esi.dz',
          to: user.email,
          subject: 'Communication document administratif demandé',
         
          html: '<p>Click <a href="http://localhost:3000/dempapsend/' + req.file.path + '">here</a> Merci de trouver votre document ci-joint</p>'
          }  ;
     
          transporter.sendMail(mailOptions, (error) => {
            if(error){
              res.status(500).json({ error })
            }else{
                res.status(200).json('un email est envoye')
            }
        })
      })
      }
       })
      
      }