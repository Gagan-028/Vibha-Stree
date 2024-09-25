const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/VibhaStree", {
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
}).then(() => {
    console.log("Database is connected");
}).catch((err) => {
    console.error("Database connection error:", err);
});
