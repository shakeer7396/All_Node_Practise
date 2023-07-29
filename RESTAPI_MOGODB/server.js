const express =require('express');
const mongoose =require('mongoose');//for connecting the data base
const BrandName = require('./model');
const app=express()

app.use(express.json())//This is a Middleware or body parser

//it take 2 arguments 1 is script copy mongodb, 2 is not require when debrication err came it shows in terminal then use ,{useUnifiedTopology: true,useNewUrlParser:true} 
mongoose.connect('mongodb+srv://Shaik_Shakeer:shaikshakeer@cluster0.muqcwcm.mongodb.net/?retryWrites=true&w=majority',{useUnifiedTopology: true,useNewUrlParser:true}).then(
    ()=> console.log('db connected')
).catch(err => console.log(err))  



//GET
app.get('/',(req,res)=>{
    res.send('Hello')
})
//POST
app.post('/addbrands',async (req,res)=>{
    const {brandname}=req.body; //brand name property variable value used from user property
try{
const newData=new BrandName({brandname}) // object created using new word, capital brand name is a schema and small brand name is received from user
await newData.save(); //saving the data
return res.json(await BrandName.find())//storing data will be return in schema using find keyword, await used for not returing empty object.
}
catch(err){
    console.log(err.message)
}
})

//Getting data from above post method saved data
app.get('/getallbrands',async (req,res)=>{
try{
    const allData = await BrandName.find();
    return res.json(allData)

}
catch(err){
    console.log(err.message)
}
})
//Path params getting single item with single id params.
app.get('/getallbrands/:id',async(req,res)=>{
    try{
const Data = await BrandName.findById(req.params.id);
return res.json(Data);
    }
    catch(err){
        console.log(err.message);
    }
})

app.listen(3000,()=>console.log("server is running"))

