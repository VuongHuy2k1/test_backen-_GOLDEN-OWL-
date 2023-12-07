const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

const Product = new Schema(
  {
    id: { type: String, require: true },
    name: { type: String, require: true },
    image: { type: String },
    description: { type: String },
    color: { type: String },
    price: { type: String, require: true },
    slug: { type: String, slug: 'name', unique: true },
  },
  { timestamps: true },
)

// add plugin
mongoose.plugin(slug)
Product.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: true,
})

module.exports = mongoose.model('Product', Product)
