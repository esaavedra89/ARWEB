// const express = require("express");

// const app = express();

// app.get("/", (req, res)=>
// {
//     //res.send("Hello");
//     res.sendFile("F:/Proyectos/ARWeb/index.html");
// });

// app.listen(3000, ()=>
// {
//     console.log("server is running on port", 3000);    
// });

const express = require('express');
const app = express();
const path = require('path');;

app.set("/","html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res)=>
{
    res.render('index');
});

app.listen(8080, ()=>
{
    console.log("Listening on http://localhost:8080");    
});