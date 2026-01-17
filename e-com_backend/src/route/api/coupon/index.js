const express = require("express");
const { createCouponControler, allCouponController, applyCouponController, deleteCouponController } = require("../../../controller/couponController");
const router = express.Router()

// http://localhost:4000/api/v1/coupon/createcoupon
router.post("/createcoupon", createCouponControler )
// http://localhost:4000/api/v1/coupon/allcoupon
router.get("/allcoupon", allCouponController )
// http://localhost:4000/api/v1/coupon/applycoupon
router.post("/applycoupon", applyCouponController )
// http://localhost:4000/api/v1/coupon/deletecoupon/:id
router.delete("/deletecoupn/:id", deleteCouponController)
module.exports = router;