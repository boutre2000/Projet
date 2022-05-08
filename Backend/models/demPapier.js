const mongoose=require('mongoose')


 const demPapier= new mongoose.Schema({
    
    format:{type:String},  
    etatD:{type:String},
    Nom:{type:String},
  
    userId:{type:mongoose.Schema.Types.ObjectId, ref: 'User' }
},
{timestamps: true}
)
 module.exports = mongoose.model('DemPapier',demPapier)