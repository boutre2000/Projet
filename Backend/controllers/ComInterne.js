const Joi = require("joi");
const ComInterne = require("../models/ComInterne");
const {
  ServerDescriptionChangedEvent,
} = require("mongoose/node_modules/mongodb");

exports.ajouterComIn = async (req, res) => {
  console.log(req.body);

  const schema = Joi.object({
    Date: Joi.date(),

    Titre: Joi.string(),

    Contenu: Joi.string().required(),
  });
  let valid = await schema.validateAsync(req.body);
  res.send(valid);

  const Com = new ComInterne({
    Date: req.body.Date,
    Titre: req.body.Titre,
    Contenu: req.body.Contenu,
  });
  console.log("Enregistrement dans la base de donnée avec succées");
  Com.save()

    .then(() => res.status(200).json())

    .catch((error) => res.status(400).json());
};

exports.modifierComInterne = (req, res) => {
  ComInterne.updateMany(
    { _id: req.params.id },
    { Titre: req.body.Titre, Contenu: req.body.Contenu },
    { new: true },

    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Internal communication Updated : ", docs);
      }
    }
  );
  res.send("Internal communication Updated");
};

exports.listerComInternePourAdmin = (req, res) => {
  console.log("la liste de communication interne est  : ");

  console.log(req.body);

  ComInterne.find({}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Second function call : ", docs);
    }
  });
  res.send("listing of internel communication admin ");
};

exports.listerComInternePourEmployé = (req, res) => {
  console.log("Ma liste de communication interne est   : ");

  console.log(req.body);

  ComInterne.findById({ _id: req.params.id }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log("Second function call : ", docs);
    }
  });
  res.send("listing of internel communication employe");
};
