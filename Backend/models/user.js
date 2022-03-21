const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


const User= new Schema({

  
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetLink:{ data: String, default: ''}
  /*
  nom: { type: String, required: true },
  prenomAr: { type: String, required: true },
  nomAr: { type: String, required: true },
  sexe: { type: String, required: true },
  dateNaiss: { type: Date, required: true },
  situationFamiliale: { type: String, required: true },
  adresse: { type: String, required: true },
  trancheAge: { type: Number, required: true},
  ccp: { type: Number, required: true},
  rib: { type: Number, required: true},
  numSs: { type: Number, required: true},
  numCni: { type: Number, required: true},
  mobile: { type: Number, required: true},
  email: { type: String, required: true },
  enfant: { type: String, required: true },
  nbrEnfant: { type: Number, required: true},
  nomEps: { type: String, required: true },
  prenomEps: { type: String, required: true },
  nomEpsAr: { type: String, required: true },
  prenomEpsAr: { type: String, required: true },
  prenomPere: { type: String, required: true },
  nomMere: { type: String, required: true },
  prenomMere: { type: String, required: true },
  */
},
{timestamps: true}
);

User.plugin(uniqueValidator);

module.exports = mongoose.model('Doctrine', User);