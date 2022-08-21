const mongoose = require('mongoose')
require('dotenv').config();
const URL = process.env.URL;
const db = () => {
    mongoose.connect(URL).then(() => {
        console.log('Database connected Successfull')
    }).catch((err)=>console.log(err))
}
module.exports = db;