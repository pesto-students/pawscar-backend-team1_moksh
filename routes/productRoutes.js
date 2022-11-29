const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isAuthUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/product/new")
  .post(isAuthUser, authorizeRoles("admin"), createProduct);

router
  .route("/product/:id")
  .put(isAuthUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthUser, authorizeRoles("admin"), deleteProduct);

router.route("/product/:id").get(isAuthUser, getProductDetails);

module.exports = router;
