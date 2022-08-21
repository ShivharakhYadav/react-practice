const db = require('./src/database/db')
const express = require('express')
const route = require('./src/routers/route')

const app = express();
//middleware
app.use(express.json())
app.use(route)


const startSever = () => {
    try {
        app.listen(2000, console.log("Server Running"))
        db();
    } catch (err) {
        console.log("Error", err)
    }
}
startSever();