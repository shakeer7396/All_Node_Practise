 1.start npm init
 2.create index.js
 3.http is required for it then 

 4.const http =require("http");

5.It helps running the server on the browser
 server.listen(5000,()=>{
    console.log("server is working")
});

6.Creating the server note 2 points main req-->giving request to the server & res-->giving response to the server an outpot.
const server=http.createServer((req,res)=>{
    //bellow content is Routing part in backend
    if(req.url === "/about"){
        res.end("<h1>About Page</h1>");
    }
    else if(req.url === "/"){
        res.end("<h1>Home Page</h1>")
    }
    else if(req.url === "/contact"){
        res.end("<h1>Contact Page</h1>")
    }
    else{
        res.end("<h1>Page Not Found</h1>")
    }
});

7 Module 
Now iam going to Module is a function, simply say Everything in node js is module.
I can export any variable from one place to another, and getting values also its a old type

a->In features.js
const gfName = "MrsRandom";
module.exports=gfName;

b->In index.js
const gfName=require("./features");
console.log(gfName)
 
-----latest type iam using in react
 a->In features.js
const gfName = "MrsRandom";
export default gfName;

b->In index.js
import http from "http";
import gfName from "./features.js";
console.log(gfName)

*I want to export multiple variable then use export {gfName,gfName1,gfName2}
import also import {gfName,gfName1,gfName2} from "./features.js";
or--> destructure import * as Myobj from "./features.js";
console.log(Myobj.USE ANY VARIABILE THERE) particularly

*// use function 
export const testloper =()=>{
    return `${Math.random()* 100}%`;
};

in index.js
import { testloper } from "./features.js";
console.log(testloper());
output--42.62601202683125%

export const testloper =()=>{
    return `${Math.floor(Math.random()* 100)}%`;
};
output--33%

we can use this in our browser
if(req.url === "/about"){
        res.end(`<h1>Love is ${testloper()}</h1>`);
    }
    output--> generate random percentage-54% etc..

----its working like api----

***---fs---**
fs is a default module it helps we can use any file from multiple methods.
Like fs.readFile, writeFile, etc...

**, after function is a callback function its a asynchronous behaviour its take time to execute
const home=fs.readFile("./index.html",()=>{ 
    console.log("File Read")
});
 else if(req.url === "/"){
        fs.readFile("./index.html",()=>{ //this is not a proper way
            console.log(home)
        });
res.end(home);
    }

 else if(req.url === "/"){
        fs.readFile("./index.html",(err,data)=>{ //this is proper way comming output
            res.end(data)
        });
    }
    or use directly --const home = fs.readFileSync("./index.html") working fine.