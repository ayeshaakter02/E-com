const { default: slugify } = require("slugify");
const productModel = require("../model/product.model");
const fs = require("fs");
const path = require("path");

const createProductController = async (req, res) => {
  try {
    let {
      title,
      description,
      price,
      discountprice,
      reviews,
      variantType,
      stock,
      category,
    } = req.body;

    let slug = slugify(title, {
      replacement: "-",
      remove: undefined,
      lower: true,
      trim: true,
    });

    let imagefile = req.files.map((item) => {
      return `${process.env.SERVER_URL}/${item.filename}`;
    });

    let product = new productModel({
      title,
      description,
      price,
      discountprice,
      reviews,
      variantType,
      stock,
      category,
      slug,
      image: imagefile,
    });
    await product.save();

    if (
      !title ||
      !description ||
      !price ||
      !discountprice ||
      !variantType ||
      !stock ||
      !category
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product data received successfully",
      data: req.body,
    });
  } catch (error) {
    console.error("Error in createProductController:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

const allProductController = async (req, res) =>{
  try {
    let products = await productModel.find({}).populate({path:"variants", select:"size stock colour _id"}).sort({createdAt: -1})
    return res.status(200).json({
      success: true,
      message: "products fetch successfull", data:products
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}

const latestProductController = async (req,res) => {
    try {
    let products = await productModel.find({}).populate({path:"variants", select:"size stock colour _id"}).sort({createdAt: -1}).limit(5)
    return res.status(200).json({
      success: true,
      message: "products fetch successfull", data:products
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}

const deleteProductController = async (req, res) => {
  try {
    let {id} =req.params;
    let findproduct = await productModel.findById(id)

    findproduct.image.forEach((url) =>{
      let imageurl = url.split("/");
      
            let imagepath = imageurl[imageurl.length - 1];
            let uploadfolder = path.join(__dirname, "../../uploads");
      
            fs.unlink(uploadfolder + "/" + imagepath, (err) => {
              if (err) return res.status(500).json({ success: false, message: err });
            });
    })

    await productModel.findByIdAndDelete(id)

    return res.status(200).json({
      success: true,
      message:  "product deleted successfull",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}

const singleProductController = async (req, res) => {
    try {
      let {slug} = req.params
    let products = await productModel.findOne({slug}).populate({path:"variants", select:"size stock colour _id"}).sort({createdAt: -1})
    return res.status(200).json({
      success: true,
      message: "products fetch successfull", data:products
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
}
module.exports = { createProductController, allProductController, latestProductController, deleteProductController, singleProductController};
