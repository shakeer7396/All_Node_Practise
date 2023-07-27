//HTTP MODULE
// var http = require("http");

// http.createServer((req,res)=>{
// res.write(req.url); //Path name showing in the screen
// res.end();
// console.log("Run")
// }).listen(8080)

//File System Module
//  var http = require("http");
// var fs = require("fs");

// http.createServer((req,res)=>{
// fs.unlink("test.txt",(err)=>{
// if(err) throw err;
// console.log("File Deleted")

// })
// }).listen(8080)

//URL MODULE
// var url=require("url")
// var adrs = "http://localhost:8080/home.html?year=2023&month=july"
// var q= url.parse(adrs,true);
// console.log(q.host)
// console.log(q.pathname)
// console.log(q.search)


// Node JS NPM
// var http=require("http");
// var uc = require("upper-case");

// http.createServer((req,res)=>{
// res.write(uc.upperCase("Hello World"));
// res.end();
// }).listen(8080)


//NODE MAILER
// var nodemailer = require("nodemailer");

// var transportar = nodemailer.createTransport({
//     service : "gmail",
//     auth : {
//         user:'shaikshakeerss123@gmail.com',
//         pass:"7396089610"
//     }
// })

// var options = {
//     from:'shaikshakeerss123@gmail.com',
//     to:'shakeershaik7396@gmail.com',
//     subject:'Testing purpose',
//     text:'Sample checking data'
// }

// transportar.sendMail(options,(err,info)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('Email is Sent'+info.response)
//     }
// })


//API SERVICE INTEGRATION
var http=require("http");
var fs=require("fs");

http.createServer((req,res)=>{
fs.readFile("data.json",(err,data)=>{
    res.write(data);
    res.end();
    console.log('Api is running')
})
}).listen(8080)
