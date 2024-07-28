const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = (DB_URL) =>{
    console.log(DB_URL)
    return mongoose.connect(DB_URL)
}

module.exports = connectDB;