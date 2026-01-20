const express = require("express");
const { createOrderController, allorderListController, ordersuccessControllers, orderfailControllers, ordercancelControllers, singleorderControllers } = require("../../../controller/orderController");

const router = express.Router()

// http://localhost:4000/api/v1/order/createorder
router.post("/createorder",createOrderController)
// http://localhost:4000/api/v1/order/allorderlist
router.get("/allorderlist",allorderListController)
// http://localhost:4000/api/v1/order/allorderlist
router.post("/success/:id", ordersuccessControllers );
// http://localhost:4000/api/v1/order/allorderlist
router.get("/success/:id", ordersuccessControllers );
// http://localhost:4000/api/v1/order/allorderlist
router.post("/fail/:id", orderfailControllers );
// http://localhost:4000/api/v1/order/allorderlist
router.post("/cancel", ordercancelControllers );
// http://localhost:4000/api/v1/order/allorderlist
router.get("/singleorder/:id", singleorderControllers );

module.exports = router;