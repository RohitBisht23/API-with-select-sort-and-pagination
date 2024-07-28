const Products = require('../models/product')
const getAllProducts = async(req, res) =>{

    const {company, name, price, rating, featured, sort, select} = req.query;
    const queryObject = {};

    if(company) {
        queryObject.company = company;
    }

    if(name) {
        queryObject.name = {$regex : name, $options:'i'};
    }
    
    let apiData = Products.find(queryObject)

    if(sort) {
        let sortFix = sort.split(",").join(" ")
        apiData = apiData.sort(sortFix)
    }

    if(select) {
        let selectFix = select.split(",").join(" ")
        apiData = apiData.select(selectFix)
    }

    if(price) {
        queryObject.price = price;
    }

    
    if(featured) {
        queryObject.featured = featured;
    }

    if(rating) {
        queryObject.rating = rating
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;

    let skip = (page -1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    // console.log("empty->",queryObject);
    const allProduct = await apiData;
    // console.log("All apple phone ",allProduct)

    if(!allProduct) {
        return res.status(404).send({
            success : false,
            msg : "Noting to fetch",
            allProduct,
            nbHits:allProduct.length
        })
    }
    // console.log(allProduct);
    return res.status(200).send({
        msg : "Get All Products",
        allProduct
    })
}

const getAllProductsTesting = async(req, res) =>{
    const allProduct = await Products.find(req.query).sort("price");

    if(!allProduct || allProduct.length == 0) {
        return res.status(404).send({
            success : false,
            msg : "Noting to fetch"
        })
    }
    console.log(allProduct);
    return res.status(200).send({
        msg : "Get All Products",
        allProduct
    })
}

module.exports = {getAllProducts, getAllProductsTesting}