//HTTP MODULE
// var http=require('http');

// http.createServer((req,res)=>{
//     res.write(req.url);
//     res.end();
//     console.log('server running...');
// }).listen(8080)

// ---------------------------------------------------------------
//FILE SYSTEM MODULE

var http=require('http');
var fs=require('fs')

http.createServer((req,res)=>{
    
    console.log('server running...');
}).listen(8080)
