const express = require("express");
const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();


const app = express();


app.use(express.json());


// =============================
// Secure Secret Management
// =============================

const AWS_ACCESS_KEY_ID =
process.env.AWS_ACCESS_KEY_ID;


const AWS_SECRET_ACCESS_KEY =
process.env.AWS_SECRET_ACCESS_KEY;


// =============================
// Database Setup
// =============================


const db =
new sqlite3.Database(":memory:");



db.serialize(()=>{


db.run(
"CREATE TABLE users(id INTEGER PRIMARY KEY, username TEXT, password TEXT)"
);



db.run(
"INSERT INTO users(username,password) VALUES(?,?)",
["admin","admin123"]
);


db.run(
"INSERT INTO users(username,password) VALUES(?,?)",
["test","test123"]
);


});




// =============================
// Home Route
// =============================


app.get("/",(req,res)=>{


res.json({

message:
"Secure Shift Left DevSecOps Application Running"

});


});




// =============================
// Users Route
// =============================


app.get("/users",(req,res)=>{


db.all(

"SELECT id,username FROM users",

[],

(err,rows)=>{


res.json(rows);


});


});




// =============================
// SECURE Login Route
//
// SQL Injection Fixed
// Parameterized Query
// =============================



app.get("/login",(req,res)=>{


let username =
req.query.username;



let query =
"SELECT * FROM users WHERE username=?";



db.all(

query,

[username],

(err,result)=>{


if(err){


return res.status(500)
.json({

error:
err.message

});


}



res.json({


message:
"Secure Query Completed",


result:
result


});



});


});




// =============================
// Server
// =============================



app.listen(3000,()=>{


console.log(

"Secure server running on http://localhost:3000"

);


});
