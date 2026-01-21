const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    discountprice: Number,
    image: {
      type: String,
      required: true,
    },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
