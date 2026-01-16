const express = require("express");
const { addSubCategoryController, deleteSubCategoryController, updatesubcategoryController } = require("../../../controller/subcategoryController");

const router = express.Router()

// http://localhost:4000/api/v1/subcategory/addsubcategory
router.post("/addsubcategory", addSubCategoryController)
// http://localhost:4000/api/v1/subcategory/deletesubcategory/:id
router.delete("/deletesubcategory/:id", deleteSubCategoryController)
// http://localhost:4000/api/v1/subcategory/updatesubcategory/:id
router.patch("/updatesubcategory/:id",  updatesubcategoryController)

module.exports = router; 