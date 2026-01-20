const { default: mongoose } = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    deliverycharge: {
      type: String,
      enum: ["outsidedhaka", "insidedhaka"],
      default: "outsidedhaka",
    },
    paymentmethod: {
      type: String,
      enum: ["cod", "online"],
      default: "cod"
    },
    items: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
        },
        variant: {
          type: mongoose.Types.ObjectId,
          ref: "Variant",
        },
        quantity: {
          type: Number,
        },
      },
    ],
    totalprice: {
      type: Number,
    },
    discount: {
      // type: mongoose.Types.ObjectId,
      // ref: "Coupon",
      type: Number,
    },
    orderstatus: {
      type: String,
      enum: ["pending", "cancelled", "delivered"],
      default: "pending",
    },
    trnd_id: {
      type: String, 
    },
    paid: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "unpaid",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
