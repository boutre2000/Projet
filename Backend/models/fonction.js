const mongoose=require('mongoose')



 const fonction= new mongoose.Schema({

    NomF:{type: String, required: true}

},
{timestamps: true}
)
 module.exports = mongoose.model('Fonction',fonction)
 