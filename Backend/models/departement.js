const mongoose=require('mongoose')



 const departement= new mongoose.Schema({

    NomD:{type: String, required: true}

},
{timestamps: true}
)
 module.exports = mongoose.model('Departement',departement)
 