const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const demCong = new Schema(
  {
    //_userId: { type: mongoose.Schema.Types.ObjectId,  ref: 'User' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    dateDebut: { type: String },
    //  required: true},
    dateFin: { type: String },
    //required: true},
    type: { type: String },
    // required: true},
    motif: { type: String },
    cause: { type: String }, // support electronique
    autoAdmin: {
      type: String,
      enum: ["En attente", "Acceptée", "Refusée"],
      default: "En attente",
    },
    autoManag: {
      type: String,
      enum: ["En attente", "Acceptée", "Refusée"],
      default: "En attente",
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("demandeConge", demCong);
