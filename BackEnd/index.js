require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 9001;
console.log(port)

const products_routes = require('./Routes/products.js');

const connectDB = require('./db/connect.js')

app.get('/', (req, res) =>{
    res.send("Hi, i am live")
})

//middleware  or to set router
app.use("/api/v1/products",products_routes);

const start = async() =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(port, () => {
            console.log(`Running at ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();