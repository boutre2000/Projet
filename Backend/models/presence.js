const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const presence= new Schema({

 
etat:{type: String},
enService: {type: Date},
   //  required: true},
enRepos: {type: Date}, 
    //required: true},

type: {type: String},
userId:{type: mongoose.Schema.Types.ObjectId,  ref: 'User'}
},

{timestamps: true}
);



module.exports = mongoose.model('presence', presence);