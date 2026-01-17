const express = require("express");
const { createVariantController } = require("../../../controller/variantController");

const router = express.Router()

// http://localhost:4000/api/v1/variant/addvariant
router.post("/addvariant", createVariantController)

module.exports = router;