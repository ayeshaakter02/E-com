const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    variant: {
      type: mongoose.Types.ObjectId,
      ref: "Variant",
    },

       totalprice:{
        type:Number,
       },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);