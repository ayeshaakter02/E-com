const express = require("express");
const router = express.Router();
const auth = require("./auth");
const banner = require("./banner");
const category = require("./category");
const subcategory = require("./subcategory");
const product = require("./product");
const variant = require("./variant");
const coupon = require("./coupon");
const cart = require("./cart");
const order = require("./order");
const item = require("./item");
const location = require("./location");

// http://localhost:4000/api/v1/auth
router.use("/auth", auth);
// http://localhost:4000/api/v1/banner
router.use("/banner", banner);
// http://localhost:4000/api/v1/category
router.use("/category", category);
// http://localhost:4000/api/v1/subcategory
router.use("/subcategory", subcategory);
// http://localhost:4000/api/v1/product
router.use("/product", product);
// http://localhost:4000/api/v1/variant
router.use("/variant", variant);
// http://localhost:4000/api/v1/coupon
router.use("/coupon", coupon);
// http://localhost:4000/api/v1/cart
router.use("/cart", cart);
// http://localhost:4000/api/v1/order
router.use("/order", order);
// http://localhost:4000/api/v1/item
router.use("/item", item);
// http://localhost:4000/api/v1/location
router.use("/location", location);

module.exports = router;