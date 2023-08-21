const express = require('express');
const mongoose = require('mongoose');
const Registeruser = require("./model")
const app = express();

mongoose.connect('mongodb+srv://Shaik_Shakeer:shaikshakeer@cluster0.muqcwcm.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

app.listen(5000,()=>{
    console.log('Server Running')
})