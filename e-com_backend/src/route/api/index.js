const express = require("express");
const router = express.Router();
const auth = require("./auth");
const banner = require("./banner");
const category = require("./category");
const subcategory = require("./subcategory");

// http://localhost:4000/api/v1/auth
router.use("/auth", auth);
// http://localhost:4000/api/v1/banner
router.use("/banner", banner);
// http://localhost:4000/api/v1/category
router.use("/category", category);
// http://localhost:4000/api/v1/subcategory
router.use("/subcategory", subcategory);

module.exports = router;