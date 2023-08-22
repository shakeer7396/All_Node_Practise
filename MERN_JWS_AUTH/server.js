const express = require('express');
const mongoose = require('mongoose');
const Registeruser = require("./model")
const jwt = require('jsonwebtoken')
const middleware = require("./middleware")

const app = express();
app.use(express.json())

mongoose.connect('mongodb+srv://Shaik_Shakeer:shaikshakeer@cluster0.muqcwcm.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

    app.post('/register',async(req,res)=>{
        try{
            const {username,email,password,confirmpassword}= req.body;
            let exist = await Registeruser.findOne({email})
            if(exist){
                return res.status(400).send("User Already Exist")
            }
            if(password !== confirmpassword){
                return res.status(400).send("Passwords are not matching")
            }
            let newUser = new Registeruser({
                username,
                email,
                password,
                confirmpassword,
            })
            await newUser.save();
            res.status(200).send("Registered Successfully")
        }
        catch(err){
            console.log(err)
            return res.status(500).send("Internal Server error")
        }
    })

    app.post('/login',async(req,res)=>{
        try{
            const {email,password} = req.body;
            let exist = await Registeruser.findOne({email})
            if(!exist){
                return res.status(400).send("User Not Exist");
            }
            if(exist.password !== password){
                return res.status(400).send("Invalid Creditials")
            }
            let payload = {
                user:{
                    id: exist.id
                }
            }
            jwt.sign(payload,`jwtSecret`,{expiresIn:3600000},(err,token)=>{
                if(err) throw err;
                return res.json({token})
            })
        }
        catch(err){
            console.log(err);
            return res.status(500).send("Server Error")
        }
    })

    app.get('/myprofile',middleware,async(req,res)=>{
        try{
            let exist = await Registeruser.findById(req.user.id);
            if(!exist){
                return res.status(400).send("User Not Found")
            }
            res.json(exist);
        }
        catch(err){
            console.log(err)
            return res.status(500).send("Server Error")
        }
    })

app.listen(5000,()=>{
    console.log('Server Running')
})