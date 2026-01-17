const express = require("express")
const { addtocartController, getAllCartListController, singleusercartController, updateQuantityController, deleteCartController } = require("../../../controller/cartController")

const router = express.Router()

// http://localhost:4000/api/v1/cart/addtocart
router.post("/addtocart", addtocartController)
//http://localhost:4000/api/v1/cart/allcart
router.get("/allcart", getAllCartListController)
// http://localhost:4000/api/v1/cart/singleusercart/:id
router.get("/singleusercart/:id", singleusercartController)
// http://localhost:4000/api/v1/cart/updatequantity/:id
router.patch("/updatequantity/:id", updateQuantityController)
// http://localhost:4000/api/v1/cart/deletecart/:id
router.delete("/deletecart/:id", deleteCartController)

module.exports = router