const { default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const variantSchema = new mongoose.Schema(
  {
    size: {
      type: String,
    },
    colour: {
      type: String,
    },
    stock: {
      type: Number,
      default: 0, 
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Variant", variantSchema);
