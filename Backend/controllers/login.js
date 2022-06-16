const User = require('../models/user');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');
const _ =require('lodash');
const nodemailer = require('nodemailer');
require('dotenv').config();



exports.signin = (req, res, next) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          return res.status(401).json({message:'Utilisateur non trouvé !'});
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({message:'Mot de passe incorrect !'});
            }
            res.status(200).json({
              message: 'login succeeded !',
              role: user.role,
              token: jwt.sign(
                { userId: user._id },
                process.env.token,
                { expiresIn: '24h' }
              )
          
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };
  
 exports.forgotPass = async  (req,res)=> {
    if (!req.body.email) {
      return res
      .status(500)
      .json('Email is required');
      }
   
    let user= await  User.findOne({ email: req.body.email})
      if ( !user) {
      return res .status(400) .json('Email does not exist');
      }
    
  const token= jwt.sign(
      { _id: User._id },
      process.env.resetToken,
      { expiresIn: '24h' }
    );
    user.updateOne
    ({resetLink: token}, (err) =>{
      if(err){
         return res.status(500).json('reset password link error')
       }
      });
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
      to: req.body.email,
      subject: 'Reset password link',
     /* text:  'You are receiving this because you (or someone else) have requested to create account in Doctrine GRH with your email.nn' +
      'Please click on the following link'+'http://localhost:3000/reset/'+token+
      'If you did not request this, please ignore this email and your password will remain unchanged'*/
      html: '<p>Click <a href="http://localhost:3000/reset/' + token + '">here</a> to reset your password</p>'
      }  ;
 
      transporter.sendMail(mailOptions, (error) => {
        if(error){
          res.status(500).json({ error })
        }else{
            res.status(200).json('un email est envoye')
        }
    })
      
  };


   exports.resetPass= async (req,res) =>{

    /*if (!req.body.resettoken) {
      return res
      .status(500)
      .json({ message: 'Token is required' });
      }*/
      const user = await User.findOne({
      Where:{
      resetLink: req.query.resettoken
      }
      });
      if (!user) {
      return res
      .status(409)
      .json({ message: 'Invalid URL' });
      }
      res.status(200).send({useremail: user.email, message: 'Valid URL' });
      
   }
  
  exports.updatePass=  async (req,res)=> {
   let user= await User.findOne({ email: req.body.email })
    
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
    let hashedPass= await  bcrypt.hash(req.body.password, 10)
          if (!hashedPass) {
            return res.status(401).json({ error });
          }
        user.updateOne({
          password: hashedPass,
          resetLink: null
        }).then(()=>{res.status(201).json({message: 'Mot de passe modifie' });    })   
          .catch(error => res.status(500).json({ error }))    
};
   


 /*   if(resetLink){
       jwt.verify(resetLink,'RANDOM_TOKEN_SECRET_RESETT', (err,decodedData) =>{
        if (err) 
          return res.status(401).json({ error: 'incorrect token or it is expired!' });
          
      
      */
 
