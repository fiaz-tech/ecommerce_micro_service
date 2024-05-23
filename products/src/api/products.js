const asyncHandler = require('express-async-handler');
const Product = require('../database/model');


// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res) => {

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
    res.status(400)
    throw new Error('Invalid product data')
  }
}

// @desc    Get products
// @route   get /api
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  if(products){
    res.status(200).json({
      message: "Products fetched successfully",
      products: products
    })
  }else{
    res.status(400)
    throw new Error('Get request failed')
}
})



// @desc    Get products by Id
// @route   get /api
// @access  Public
const getProductById = asyncHandler(async (req, res) => {

  const product = await Product.findById(req.params.id);
  if(product){
    res.status(200).json({
      message: "Products fetched successfully",
      product: product
    })
  }else{
    res.status(400)
    throw new Error('Get request failed')
}
})



// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {

  const product = await Product.findById(req.params.id)

  if (product) {
    
    product.name = req.body.name || product.name
    product.price = req.body.price || product.price
    product.description = req.body.description || product.description
    product.image = req.body.image ||  product.image
    product.brand = req.body.brand || product.brand
    product.category = req.body.category || product.category
    product.countInStock = req.body.countInStock || product.countInStock
    
    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    console.log("enteredError")
    res.status(404)
    throw new Error('Post not found')
  }
})


// @desc    Delete product
// @route   DELETE /api/product/:id
const deleteProduct = asyncHandler(async (req, res) => {
  
  //const product = await Product.findById(req.params.id)
  const product = await Product.findByIdAndDelete(req.params.id)

  if(product){
    res.status(201).json({message: "Product deleted successfully"})
  }else {
    res.status(404)
    throw new Error('Post delete failed')
  }

})



  module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
  }




  