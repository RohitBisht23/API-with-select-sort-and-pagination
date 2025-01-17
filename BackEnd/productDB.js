require('dotenv').config()
const Product = require('./models/product');
const connectDB = require('./db/connect');

const ProductJson = require('./products.json')

const start = async() =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany({});
        await Product.create(ProductJson);
        console.log("success")
    } catch(error) {
        console.log(error);
    }
}


start();