const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const demCong= new Schema({

  
 //_userId: { type: mongoose.Schema.Types.ObjectId,  ref: 'User' },
  userId:{type:mongoose.Schema.Types.ObjectId, ref: 'User' },
  dateDebut: {type: Date},
   //  required: true},
  dateFin: {type: Date}, 
    //required: true},
  type: {type: String},
    // required: true},
  cause: {type: String},
  autoAdmin:{type:String, default:'En attente'},
  autoManag:{type:String, default: 'En attente'},
  droitCong:{type:Number}
},


{timestamps: true}
);



module.exports = mongoose.model('demandeConge', demCong);