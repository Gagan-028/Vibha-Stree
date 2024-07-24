const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const cookie = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
});

app.get("/",(req,res)=>{
    res.send("Hey there");
})