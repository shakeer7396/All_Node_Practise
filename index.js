//old type
// const http =require("http");
// const gfName=require("./features");
//New Type
import http from "http";
import { testloper } from "./features.js";
import fs from "fs"

const home = fs.readFileSync("./index.html")

const server=http.createServer((req,res)=>{
    if(req.url === "/about"){
        res.end(`<h1>Love is ${testloper()}</h1>`);
    }
    else if(req.url === "/"){
        res.end(home)
    }
    else if(req.url === "/contact"){
        res.end("<h1>Contact Page</h1>")
    }
    else{
        res.end("<h1>Page Not Found</h1>")
    }
});

server.listen(5000,()=>{
    console.log("server is working")

});