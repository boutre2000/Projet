const Joi = require("joi");
const congé = require("../models/Congé");
const nodemailer = require("nodemailer");

exports.planifierCongéA = async (req, res) => {
  console.log(req.body);
  // const schema = Joi.object({
  //   DateDébut: Joi.date().required(),
  //   DateFin: Joi.date().required(),
  // });
  // let valid = await schema.validateAsync(req.body);
  // res.send(valid);

  const RequestCongé = new congé({
    DateDébut: req.body.DateDébut,
    DateFin: req.body.DateFin,
    Status: req.body.Status,
  });
  console.log("Enregistrement dans la base de donnée avec succées");

  RequestCongé.save()

    .then(() => res.status(200).json())

    .catch((error) => res.status(400).json());

  console.log("Notifier tous les employés par mail concernant le Congé annuel");

  var transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "azougliyacine04@gmail.com",
      pass: "29102001Y*",
    },
    tls: { ciphers: "SSLv3" },
  });
  const mailOptions = {
    from: "azougliyacine04@gmail.com", //un compte quelconque
    to: "azougliyacine02@gmail.com", //le compte Email personnel de RH
    subject: "Le début de Congé Annuel est : " + req.body.DateDébut,
    text:
      " Bonjour à vous, Je vous informe que le Début de congé annuel est bien evidemment le " +
      req.body.DateDébut +
      " .Bonne Vacances !  ",
  };

  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log("une erreur survenue", err);
    } else {
      res.status(200).json("un email est bien envoyé");
    }
  });
};

exports.ListerLesPlanificationDeCongéAnnuelPourAdmin = async (req, res) => {
  await congé
    .find({})

    .then((cong) => {
      if (!cong) {
        return res.status(401).json({ error: "cette section est vide !" });
      }
      res.status(200).json(cong);
    })
    .catch((error) => res.status(500).json({ error }));
};
exports.getOneCong = async (req, res) => {
  const cong = await congé.findOne({ _id: req.params.id });

  if (!cong) {
    return res.status(401).json({ error: "cette section est vide !" });
  }
  res.status(200).json(cong);

  // res.send("listing of internel communication emcomloye");
};
exports.editCon = (req, res) => {
  congé.updateMany(
    { _id: req.params.id },
    {
      DateDébut: req.body.DateDébut,
      DateFin: req.body.DateFin,
      Status: req.body.Status,
    },
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
