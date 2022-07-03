// const { string } = require("joi");
// const { Timestamp } = require("mongodb");
// const mongoose = require("mongoose");
// const { stringify } = require("nodemon/lib/utils");

// const ComInterneTemplate = new mongoose.Schema(
//   {
//     Date: {
//       type: Date,
//       required: true,
//     },
//     Titre: {
//       type: String,
//       required: true,
//     },
//     Contenu: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// module.exports = mongoose.model("ComInterne", ComInterneTemplate);
const { string } = require("joi");
const mongoose = require("mongoose");

const ComInterneTemplate = new mongoose.Schema({
  Date: String,
  Titre: String,
  Contenu: String,
});
module.exports = mongoose.model("ComInterne", ComInterneTemplate);
