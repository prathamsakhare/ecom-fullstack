const mongoose = require("mongoose");
const { Schema } = mongoose;
// ! schema
const productSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, min: 1, required: true },
  discountPercentage: { type: Number, min: 0, max: 50 },
  rating: { type: Number, min: 0, max: 5 },
  // * this way you can put checks on the data field, minimum limit and max limit etc. also, for
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
  // this [String] denotes that images is a array of strings
});

// ! model
exports.Product = mongoose.model("Product", productSchema);
