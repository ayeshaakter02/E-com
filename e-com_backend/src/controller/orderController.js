const cartModel = require("../model/cart.model");
const orderModel = require("../model/order.model");
// setup ssl
const SSLCommerzPayment = require("sslcommerz-lts");
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASS;
const is_live = false; //true for live, false for sandbox

const createOrderController = async (req, res) => {
  try {
    let { user, orderstatus, discount, paymentmethod, city, address, phone } =
      req.body;

    let cartlist = await cartModel.find({ user });

    if (cartlist.length == 0) {
      return res.status(404).json({ success: false, message: "cart is empty" });
    } else {
      if (paymentmethod == "cod") {
        let totalprice = cartlist.reduce((prev, cur) => {
          return prev + Number(cur.totalprice || 0);
        }, 0);

        let order = new orderModel({
          user,
          orderstatus,
          discount,
          paymentmethod,
          city,
          address,
          phone,
          items: cartlist,
          totalprice,
        });

        await order.save();
        let deletecart = await cartModel.deleteMany({ user });

        return res.status(201).json({
          success: true,
          message: "cod order placed successfull",
          data: order,
          method: "cod",
        });
      } else {
        //online payment
        let totalprice = cartlist.reduce((prev, cur) => {
          return prev + Number(cur.totalprice || 0);
        }, 0);

        let tran_id = `TRNX${Date.now()}`
        let order = new orderModel({
          user,
          orderstatus,
          discount,
          paymentmethod,
          city,
          address,
          phone,
          items: cartlist,
          totalprice,
          trnd_id: tran_id,
        });

        await order.save();
        let deletecart = await cartModel.deleteMany({ user });

        const data = {
          total_amount: totalprice,
          currency: "BDT",
          tran_id: tran_id,
          success_url: `http://localhost:4000/api/v1/order/success/${tran_id}`,
          fail_url: "http://localhost:3030/fail",
          cancel_url: "http://localhost:3030/cancel",
          ipn_url: "http://localhost:3030/ipn",
          shipping_method: "Courier",
          product_name: "Computer.",
          product_category: "Electronic",
          product_profile: "general",
          cus_name: "Customer Name",
          cus_email: "customer@example.com",
          cus_add1: address,
          cus_add2: "Dhaka",
          cus_city: "Dhaka",
          cus_state: "Dhaka",
          cus_postcode: "1000",
          cus_country: "Bangladesh",
          cus_phone: phone,
          cus_fax: "01711111111",
          ship_name: "Customer Name",
          ship_add1: "Dhaka",
          ship_add2: "Dhaka",
          ship_city: "Dhaka",
          ship_state: "Dhaka",
          ship_postcode: 1000,
          ship_country: "Bangladesh",
        };
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
        sslcz.init(data).then((apiResponse) => {
          // Redirect the user to payment gateway
          let GatewayPageURL = apiResponse.GatewayPageURL;
          return res.status(201).json({
            success: true,
            message: "online order placed successfull",
            data: order,
            method: "online",
            paymenturl: GatewayPageURL,
          });
        });
      }
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || error,
    });
  }
};

const allorderListController = async (req, res) => {
  try {
    let orderlist = await orderModel
      .find({})
      .populate({
        path: "user",
        select: "name email",
      })
      .populate({
        path: "items.product",
        select: "title price discountprice image quantity",
      })
      .populate({
        path: "items.variant",
        select: "size stock color",
      });

    return res.status(200).json({
      success: true,
      message: "get all order list successfull",
      data: orderlist,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || error,
    });
  }
};

// Payment success callback
const ordersuccessControllers = async (req, res) => {
    const { id } = req.params;

    const order = await orderModel.findOneAndUpdate(
      { trnd_id: id },
      { paid: "paid" },
      { new: true }
    );

    return res.redirect("http://localhost:3000/success")
};

// Payment failed callback
const orderfailControllers = async (req, res) => {
  try {
    const { id } = req.params; // transactionId

    const order = await orderModel.findOneAndUpdate(
      { transactionId: id },
      { paid: "unpaid" },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found for this transaction",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Payment failed and order updated",
      data: order,
    });
  } catch (error) {
    console.error("Order Fail Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// Cancel handler (you can implement logic if needed)
const ordercancelControllers = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Order cancel endpoint hit (not implemented yet)",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

const singleorderControllers = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await orderModel
      .findOne({ user: id })
      .populate({ path: "user", select: "name email _id" })
      .populate({
        path: "items.product",
        select: "title image price discountprice _id",
      })
      .populate({ path: "items.variants", select: "size color stock _id" })
      .sort({ createdAt: -1 });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Single order fetched successfully",
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  createOrderController,
  allorderListController,
  ordersuccessControllers,
  orderfailControllers,
  ordercancelControllers,
  singleorderControllers,
};
