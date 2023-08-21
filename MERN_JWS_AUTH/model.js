const mongoose = require("mongoose");

let Registeruser = new mongoose.Schema({
    username:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique: true,
    },
    password:{
        type: String,
        required:true,
    },
    confirmpassword:{
        type: String,
        required: true,
    }

})

module.exports = mongoose.model("Registeruser",Registeruser);//First one is put anything its a model name, Second one is created schema.