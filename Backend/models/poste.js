const mongoose=require('mongoose')
const { stringify } = require('nodemon/lib/utils')


 const poste= new mongoose.Schema({
    
    numP: {type: Number},
    Situation :{type:String },
       //     ,required: true},
        
    Salaire :{type: Number},
      //    ,required: true },
        
    StatusP :{type: String},
      // ,required: true},
    
    DateE: {type: Date},
      //      , required: true},
        
    DateS:{type: Date, default: "Non déterminée"},
          //  , required: true},
         
    depId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'departement' },
    fonctionId:{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'fonction' },
    userId:{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' }
    },
    {timestamps: true}
    )
 module.exports = mongoose.model('Poste',poste)
 