const express = require('express');
const mongoose = require("mongoose")
const TaskSchema = require("./model.js");

const app=express();

mongoose.connect('mongodb+srv://Shaik_Shakeer:shaikshakeer@cluster0.muqcwcm.mongodb.net/?retryWrites=true&w=majority',{useUnifiedTopology: true,useNewUrlParser:true}).then(
    ()=> console.log('db connected')
).catch(err => console.log(err))

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>');
})

app.post('/addtask',async(req,res)=>{
    const {todo} = req.body;
    try{
const newData = new TaskSchema({
    todo: todo
})
await newData.save();
return res.json(await TaskSchema.find())
    }
    catch(err){
        console.log(err.message)
    }
})

app.listen(5000,()=>console.log("server running"));