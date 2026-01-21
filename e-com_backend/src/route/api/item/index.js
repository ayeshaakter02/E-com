const express = require("express");
const upload = require("../../../utils/uploadMiddleware");
const { addItemController, updateItemController, deleteItemController, allItemController, singleItemBySlugController } = require("../../../controller/itemController");
const router = express.Router();

// Add Item (with image upload)
router.post("/add", upload.single("image-item"), addItemController);

// Update Item (with optional image)
router.put("/update/:id", upload.single("image-item"), updateItemController);

// // Delete Item
router.delete("/delete/:id", deleteItemController);

// Get All Items
router.get("/all", allItemController);

router.get("/:slug", singleItemBySlugController);

module.exports = router;
