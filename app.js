const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const lodash = require("lodash");

const app = express();

app.use(express.json());


// =================================
// Intentional Vulnerability #1
// Hardcoded Fake AWS Secret Key
// Detected by: Gitleaks
// =================================

const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY =
  "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";


// =================================
// Database Setup
// =================================

const db = new sqlite3.Database(":memory:");

db.serialize(() => {

    db.run(
        "CREATE TABLE users(id INTEGER PRIMARY KEY, username TEXT, password TEXT)"
    );


    db.run(
        "INSERT INTO users(username,password) VALUES('admin','admin123')"
    );


    db.run(
        "INSERT INTO users(username,password) VALUES('test','test123')"
    );

});


// =================================
// Normal API Route
// =================================

app.get("/", (req,res)=>{

    res.json({
        message:
        "Shift Left DevSecOps Demo Application Running"
    });

});


// =================================
// Normal Users Route
// =================================

app.get("/users",(req,res)=>{

    db.all(
        "SELECT id,username FROM users",
        [],
        (err,rows)=>{

            res.json(rows);

        }
    );

});



// =================================
// Intentional Vulnerability #2
// SQL Injection Vulnerability
//
// Example Attack:
// /login?username=admin' OR '1'='1
//
// Detected by: Semgrep
// =================================


app.get("/login",(req,res)=>{


    let username = req.query.username;


    let query =
    "SELECT * FROM users WHERE username='" 
    + username 
    + "'";


    console.log(
        "Executing:",
        query
    );


    db.all(
        query,
        (err,result)=>{


            if(err){

                return res.status(500)
                .json({
                    error:err.message
                });

            }


            res.json({

                message:
                "Login Search Completed",

                result:result

            });


        }
    );


});



// =================================
// Start Server
// =================================


app.listen(3000,()=>{

    console.log(
        "Server running on http://localhost:3000"
    );

});
