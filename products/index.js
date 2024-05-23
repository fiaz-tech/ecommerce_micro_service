const express = require('express');
const dotenv = require('dotenv')
const connectDB = require('./src/database/connection');
const productRoute = require('./src/api/productRoute');

const Product = require('./src/database/model')

const app = express();


dotenv.config();

connectDB();


app.use(express.json());
app.use('/api', productRoute);

/*
app.post('/api', async (req,res) => {

    const { name, price, image, brand, category, countInStock, numReviews, description } = req.body;

    const product = await Product.create({
      name,
      price,
      image,
      brand,
      category,
      countInStock, 
      numReviews, 
      description 

    })
  
  if (product) {
    res.status(201).json({
      _id: product._id,
      name: product.name,
      brand: product.brand,
    })
  } else {
    res.status(400).json({"msg": "Invalid product data"})
    //throw new Error('Invalid product data')
  }
})


app.use('/', (req, res, next) => {
    return res.status(200).json({"msg": "Hello from Products"})
})

*/


app.listen(8001, () => {
    console.log("Products is listening on PORT 8001")
})