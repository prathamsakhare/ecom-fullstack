const express = require("express");
const productController = require("../controller/product");
const router = express.Router();

router
  .post("/", productController.createProduct)
  .get("/", productController.getAllProducts)
  .get("/:id", productController.getProduct)
  .put("/:id", productController.putProduct)
  .patch("/:id", productController.patchProduct)
  .delete("/:id", productController.deleteProduct);


exports.router = router;