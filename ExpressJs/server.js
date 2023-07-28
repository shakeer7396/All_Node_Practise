
const express = require("express") //Importing the express 
const app= express();

app.use(express.json())//Its a STATEMENT, It means all receiving values will be in json format 
app.get('/',(req,res)=>{
    res.send('<h1>Hello</h1>Shaik')
})
const products = [
    {
        id:1,
        name:"iphone"
    },
    {
        id:2,
        name:"mi"
    },
    {
        id:3,
        name:"realme"
    }
]
//GET REQUEST
app.get("/products",(req,res)=>{
    res.json(products)
})
app.get("/products/:id",(req,res)=>{
    const newData=products.filter(item => item.id.toString() == req.params.id)
    return res.json(newData);
})
//POST REQUEST
app.post("/addproducts",(req,res)=>{
    const {id,name} =req.body; //It is compulsory for post request
    console.log(id,name)
    return res.send("Data Stored")
})
//PUT REQUEST EDIT ONE
app.put("/addproducts",(req,res)=>{
    const {id,name} =req.body; //It is compulsory for put request
    console.log(id,name)
    return res.send("Data Stored")
})
app.listen(5000,()=>console.log("Server is Running"))