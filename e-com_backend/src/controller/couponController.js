const couponModel = require("../model/coupon.model");

const createCouponControler = async (req, res) => {
  try {
    let { code, discountType, discountValue, minPurchase, expiryDate } =
      req.body;

    let exist = await couponModel.findOne({ code });
    if (exist) {
      return res
        .status(400)
        .json({ success: false, message: "Coupon code already exists!" });
    }

    let coupon = new couponModel({
      code,
      discountType,
      discountValue,
      minPurchase,
      expiryDate,
    });
    await coupon.save();

    res
      .status(201)
      .json({ success: true, message: "Coupon created successfully", coupon });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || error,
    });
  }
};

const allCouponController = async (req, res) => {
  try {
    let coupons = await couponModel.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      message: "coupons fetch successfull",
      data: coupons,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || error,
    });
  }
};

const applyCouponController = async (req, res) => {
  try {
    let { code, totalAmount } = req.body;

    let coupon = await couponModel.findOne({ code, isActive: true });

    if (!coupon)
      return res
        .status(404)
        .json({ success: false, message: "Invalid coupon code" });

    if (new Date() > coupon.expiryDate)
      return res
        .status(400)
        .json({ success: false, message: "Coupon expired" });

    if (totalAmount < coupon.minPurchase)
      return res
        .status(400)
        .json({
          success: false,
          message: `Minimum purchase required ${coupon.minPurchase}`,
        });

    let discount = 0;
    if (coupon.discountType === "percentage") {
      discount = (coupon.discountValue / 100) * totalAmount;
    } else {
      discount = coupon.discountValue;
    }

    const finalAmount = totalAmount - discount;

    return res.status(200).json({
      success: true,
      message: "Coupon applied successfully",
      discount,
      finalAmount,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || error,
    });
  }
};

const deleteCouponController = async (req, res) => {
  try {
    let { id } = req.params;
    await couponModel.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "coupon deleted successfull",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || error,
    });
  }
};
module.exports = {
  createCouponControler,
  allCouponController,
  applyCouponController,
  deleteCouponController,
};
