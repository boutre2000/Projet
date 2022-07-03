const Joi = require("joi");
const ComInterne = require("../models/ComInterne");
const {
  ServerDescricomtionChangedEvent,
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

exports.editcom = (req, res) => {
  ComInterne.updateMany(
    { _id: req.params.id },
    { Titre: req.body.Titre, Contenu: req.body.Contenu },
    { new: true },

    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log("Internal communication Ucomdated : ", docs);
      }
    }
  );
  res.send("Internal communication Ucomdated");
};

exports.listerCom = (req, res) => {
  console.log("la liste de communication interne est  : ");

  console.log(req.body);
  ComInterne.find({ ...req.body })

    .then((com) => {
      if (!com) {
        return res.status(401).json({ error: "cette section est vide !" });
      }
      res.status(200).json(com);
    })
    .catch((error) => res.status(500).json({ error }));
  // ComInterne.find({}, function (err, docs) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Second function call : ", docs);
  //   }
  // });
  // res.status(200).json({ docs });
};

exports.getOneCom = async (req, res) => {
  const congA = await ComInterne.findOne({ _id: req.params.id });

  if (!congA) {
    return res.status(401).json({ error: "cette section est vide !" });
  }
  res.status(200).json(congA);
};
