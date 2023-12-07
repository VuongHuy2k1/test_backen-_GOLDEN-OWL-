const Product = require('../models/Product')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
}

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).send('Product not found')
    }
    res.json(product)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
}

const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.status(201).json(newProduct)
  } catch (error) {
    console.error(error)
    res.status(400).send('Bad request')
  }
}

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    )
    if (!updatedProduct) {
      return res.status(404).send('Product not found')
    }
    res.json(updatedProduct)
  } catch (error) {
    console.error(error)
    res.status(400).send('Bad request')
  }
}

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(204).send()
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}
