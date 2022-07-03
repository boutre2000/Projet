// const { string } = require("joi");
// const { Timestamp } = require("mongodb");
// const mongoose = require("mongoose");
// const { stringify } = require("nodemon/lib/utils");

// const CongéTemplate = new mongoose.Schema(
//   {
//     DateDébut: {
//       type: Date,
//       required: true,
//     },
//     DateFin: {
//       type: Date,
//       required: true,
//     },
//     Status: {
//       type: String,
//       enum: ["Debut De Congé", "Fin De Congé"],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// module.exports = mongoose.model("Congé", CongéTemplate);
const { string } = require("joi");
const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const CongeTemplate = new mongoose.Schema({
  DateDebut: String,
  DateFin: String,
  Status: String,
});
module.exports = mongoose.model("CongeAnnuel", CongeTemplate);
