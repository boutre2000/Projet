const User = require('../models/user');
const bcrypt= require('bcrypt');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');


exports.signupEmp = (req, res) => {
    User.findOne({ email: req.body.email}, (err, user) => {
        if (err || user) {
        return res .status(400) .json({ message: 'User with this email exist' });
        }
      })

      const token= jwt.sign(
        { _id: User._id },
        'RANDOM_TOKEN_SECRET',
        { expiresIn: '1h' }
      );

      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
          user: 'boutre002@gmail.com',
          pass: 'bout2000'
        }
      });
      const mailOptions={
        from :'boutre002@gmail.com',
        to: req.body.email,
        subject: 'Reset password link',
        text: 'You are receiving this because you (or someone else) have requested to create account in Doctrine GRH with your email.nn' +
        'Please click on the following link'+'http://localhost:3000' +token+
        'If you did not request this, please ignore this email and your password will remain unchanged'};
   
        transporter.sendMail(mailOptions, (err, res) => {
          if(err){
              console.log('une erreur survenue', err)
          }else{
              res.status(200).json('un email est envoye')
          }
      })

    };

      /*  const userEmail =  User.findOne({
          email: req.body.email
        });
        if (userEmail) {
          return res
            .status(409)
            .json({ message: 'Email existe deja' });
        }*/
      
  
