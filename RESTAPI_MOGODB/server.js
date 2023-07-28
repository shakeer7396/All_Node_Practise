const express =require('express');
const mongoose =require('mongoose');//for connecting the data base
const app=express()

//it take 2 arguments 1 is script copy mongodb, 2 is not require when debrication err came it shows in terminal then use ,{useUnifiedTopology: true,useNewUrlParser:true} 
mongoose.connect('mongodb+srv://shaikshakeer:shaikshakeer@cluster0.muqcwcm.mongodb.net/?retryWrites=true&w=majority',{useUnifiedTopology: true,useNewUrlParser:true}).then(
    ()=> console.log('db connected')
).catch(err => console.log(err))  



//GET
app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(3000,()=>console.log("server is running"))