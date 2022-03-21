const User = require('../models/user');
const bcrypt= require('bcrypt');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          email: req.body.email,
          password: hash
        });
      /*  const userEmail =  User.findOne({
          email: req.body.email
        });
        if (userEmail) {
          return res
            .status(409)
            .json({ message: 'Email existe deja' });
        }*/
        user.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };
