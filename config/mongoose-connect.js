const mongooose = require('mongoose');


mongooose.connect("mongodb://localhost:27017/VibhaStree")
.then(()=>{
    console.log("Database is connected");
})
.catch((err)=>{
    console.log("Database Error");
})

module.exports = mongooose.connection;