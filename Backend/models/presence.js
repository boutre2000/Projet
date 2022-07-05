const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const presence= new Schema({

date: {type: Date},
presence:[{
    enservice: Date,
    enrepos: Date,
    retard: Number,
    avance: Number,
    userId: {type: mongoose.Schema.Types.ObjectId,  ref: 'user'},
  }],
 absence:[{
    
    typeAbs: {type: String, enum:['En Mission','En terrin','Non-Justifiée','Justifiée'], default: 'Non-Justifiée'},
    userId: {type: mongoose.Schema.Types.ObjectId,  ref: 'user'},
  }],



},

{timestamps: true}
);



module.exports = mongoose.model('presence', presence);