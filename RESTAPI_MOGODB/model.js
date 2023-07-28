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