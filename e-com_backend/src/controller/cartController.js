const cartModel = require("../model/cart.model");
const productModel = require("../model/product.model");

const addtocartController = async (req, res) => {
  try {
    const { user, product, variant, quantity } = req.body;

    const productinfo = await productModel.findById(product);
    if (!productinfo) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // for multivariant variant
    if (productinfo.variantType === "multivariant" && !variant) {
      return res
        .status(400)
        .json({ success: false, message: "Variant is required" });
    }

    const price = productinfo.discountprice;

    // same product + same variant already exists?
    const existingCart = await cartModel.findOne({
      user,
      product,
      variant: variant || null,
    });

    if (existingCart) {
      // quantity increase
      existingCart.quantity += quantity;
      existingCart.totalprice = existingCart.quantity * price;
      await existingCart.save();

      return res.status(200).json({
        success: true,
        message: "Cart quantity updated",
        data: existingCart,
      });
    }

    // not exists create new cart item
    const totalprice = price * quantity;

    const addtocart = new cartModel({
      user,
      product,
      variant: variant || null,
      quantity,
      totalprice,
    });

    await addtocart.save();

    return res.status(201).json({
      success: true,
      message: "Product added to cart",
      data: addtocart,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message });
  }
};

const getAllCartListController = async (req, res) => {
  try {
    const allcartlist = await cartModel
      .find({})
      .populate("user", "name email")
      .populate("product", "title image discountprice price")
      .populate("variant", "size stock");

    return res.status(200).json({
      success: true,
      message: "Cart fetch successfully",
      data: allcartlist,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message });
  }
};

const singleusercartController = async (req, res) => {
  try {
    const { id } = req.params;

    const cartlist = await cartModel
      .find({ user: id })
      .populate("product", "title image discountprice price")
      .populate("variant", "size stock");

    return res.status(200).json({
      success: true,
      message: "Single user cart",
      data: cartlist,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message });
  }
};

const updateQuantityController = async (req, res) => {
  try {
    const { quantity, product, variant } = req.body;
    const { id } = req.params;

    const productinfo = await productModel.findById(product);
    if (!productinfo) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    const totalprice = productinfo.discountprice * quantity;

    const filter = {
      user: id,
      product,
      variant: variant || null,
    };

    const cart = await cartModel.findOneAndUpdate(
      filter,
      { quantity, totalprice },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Quantity updated",
      data: cart,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message });
  }
};

const deleteCartController = async (req, res) => {
  try {
    const { id } = req.params;

    await cartModel.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Cart item deleted",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message });
  }
};

module.exports = {
  addtocartController,
  getAllCartListController,
  singleusercartController,
  updateQuantityController,
  deleteCartController,
};
