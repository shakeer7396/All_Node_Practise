const mongoose =require('mongoose');
//DESIGNING THE SCHEMA schema is ready
const BrandName =mongoose.Schema({
    brandname:{
        type: String,
        require:true,
    },
    date:{
        type:Date,
        default: Date.now
    }

})

//mongodb is a Nosql database so 
module.exports = mongoose.model('brandname',BrandName)//1 argument is filename and 2nd argument is schema