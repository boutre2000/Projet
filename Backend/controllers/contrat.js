const req = require("express/lib/request");
const Cont = require("../models/contrat");
const Poste = require("../models/poste");
const moment = require("moment");
const { find } = require("lodash");

const User = require("../models/user");
const post = require("../models/poste");

exports.createContrat = async (req, res) => {
  const file = req.file;
  // let user = await User.findOne({ email: req.body.email });
  // if (!user) return res.status(401).json("user n'existe pas ");

  // let p = await Poste.findOne({ userId: user._id, nomP: req.body.nomP });
  let p = await Poste.findOne({ nomP: req.body.nomP }); // send post id
  if (!p) return res.status(401).json("Post does not exist");

  const cont = new Cont({
    ...req.body,
    posteId: p._id,
    pj: file.path,
  });
  cont
    .save()
    .then(() => res.status(200).json("Contrat cree !"))
    .catch((error) => res.status(500).json({ error }));
};

exports.sendPj = (req, res, next) => {
  try {
    const file = req.file;
    Cont.findOneAndUpdate(
      { _id: req.params.id },
      { pj: file.path },
      function (err, docs) {
        if (err) {
          res.status(409).json({ err });
        } else {
          res.status(201).json({ message: "Objet enregistré !" });
        }
      }
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.viewPj = (req, res) => {
  //return res.sendFile(path.join(`${__dirname}/../views/index.html`));
  Cont.findOne({ _id: req.params.id }, (err, contrat) => {
    if (err) {
      return res.status(500).json({ err });
    } else {
      return res.download(contrat.pj);
    }
  });
};

exports.listCont = (req, res) => {
  Cont.find({ ...req.body })
    .populate({
      path: "posteId",
      populate: { path: "userId", select: "Nom Prenom email" },
      select: "nomP",
    })
    .then((p) => {
      if (!p) {
        return res.status(401).json({ error: "cette section est vide !" });
      }
      res.status(200).json(p);
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getOneCont = (req, res) => {
  Cont.findById(req.params.id)
    .populate({
      path: "posteId",
      populate: { path: "userId", select: "Nom Prenom email" },
      select: "nomP",
    })
    .then((p) => {
      if (!p) {
        return res.status(401).json({ error: "cette section est vide !" });
      }
      res.status(200).json(p);
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.checkContUser = async (req, res, next) => {
  let i = 0;
  let uids = new Array();
  let ps = await post.find(
    { userId: req.user },
    { createdAt: 0, updatedAt: 0, __v: 0 }
  );
  ps.map((item) => {
    uids[i] = item._id;
    i++;
  });
  if (!ps) {
    return res.status(401).json("cette section est vide !");
  }
  Cont.find({ posteId: { $in: uids } }, { createdAt: 0, updatedAt: 0, __v: 0 })
    .populate({
      path: "posteId",
      populate: { path: "depId", select: "NomD" },
      populate: { path: "userId", select: "Nom Prenom" },
      select: "nomP",
    })
    .then((c) => {
      if (!c) {
        return res.status(401).json("cette section est vide !");
      }
      res.status(200).json(c);
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.editCont = (req, res) => {
  // if (req.body.email) {
  //   User.findOne({ email: req.body.email }).then((user) => {
  //     req.body.email = user._id;
  //   });
  // }
  // if (req.body.nomP) {
  //   post.findOne({ nomP: req.body.nomP }).then((post) => {
  //     req.body.nomP = post._id;
  //   });
  // }
  // const pst = {
  //   ...req.body,
  // };
  // Cont.findOneAndUpdate(
  //   { _id: req.params.id },
  //   { $set: pst },
  //   { new: true },
  //   (err) => {
  //     if (err) {
  //       res.status(400).json("modification ne peut etre sauvegardee");
  //     } else {
  //       res.status(200).json("modificaation sauvegarde");
  //     }
  //   }
  // );
  if (req.body.email) {
    User.findOne({ email: req.body.email }).then((user) => {
      req.body.email = user._id;
    });
  }
  if (req.body.nomP) {
    post.findOne({ nomP: req.body.nomP }).then((post) => {
      req.body.nomP = post._id;
    });
  }
  const pst = {
    ...req.body,
  };
  Cont.findOneAndUpdate(
    { _id: req.params.id },
    { $set: pst },
    { new: true },
    (err) => {
      if (err) {
        res.status(400).json("modification ne peut etre sauvegardee");
      } else {
        res.status(200).json("modificaation sauvegarde");
      }
    }
  );
};
