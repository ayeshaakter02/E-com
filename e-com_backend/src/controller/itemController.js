const slugify = require("slugify");
const Item = require("../model/item.model");
const fs = require("fs");
const path = require("path");

// Add Item
let addItemController = async (req, res) => {
  try {
    const { title, description, price, discountprice, subcategory } = req.body;
    const { filename } = req.file;

    if (!title || !price || !subcategory || !filename) {
      return res.status(400).json({
        success: false,
        message: "Title, price, image and subcategory are required",
      });
    }

    const newItem = new Item({
      title,
      slug: slugify(title, { lower: true, strict: true }), // ✅ slug generated
      description,
      price,
      discountprice,
      image: `${process.env.SERVER_URL}/${filename}`,
      subcategory,
    });

    await newItem.save();

    res.status(201).json({
      success: true,
      data: newItem,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update Item
let updateItemController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, discountprice, subcategory } = req.body;
    const { filename } = req.file || {};

    const item = await Item.findById(id);
    if (!item) return res.status(404).json({ success: false, message: "Item not found" });

    if (filename) {
      // delete old image
      const oldImage = item.image.split("/").pop();
      const uploadfolder = path.join(__dirname, "../../uploads");
      fs.unlink(uploadfolder + "/" + oldImage, (err) => {
        if (err) console.log("Error deleting old image:", err);
      });
      item.image = `${process.env.SERVER_URL}/${filename}`;
    }

    if (title) {
      item.title = title;
      item.slug = slugify(title, { lower: true, strict: true }); // ✅ update slug if title changes
    }
    if (description) item.description = description;
    if (price) item.price = price;
    if (discountprice) item.discountprice = discountprice;
    if (subcategory) item.subcategory = subcategory;

    await item.save();

    return res.status(200).json({ success: true, message: "Item updated successfully", data: item });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || error });
  }
};

// Get all items
let allItemController = async (req, res) => {
  try {
    const items = await Item.find({})
      .populate({
        path: "subcategory",
        select: "name slug category",
        populate: { path: "category", select: "name slug" },
      });

    // ✅ Auto generate slug for old items if missing
    for (let i of items) {
      if (!i.slug) {
        i.slug = slugify(i.title, { lower: true, strict: true });
        await i.save();
      }
    }

    return res.status(200).json({ success: true, data: items });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Get single item by slug
let singleItemBySlugController = async (req, res) => {
  try {
    const { slug } = req.params;

    const item = await Item.findOne({ slug }).populate({
      path: "subcategory",
      populate: { path: "category" },
    });

    if (!item) return res.status(404).json({ success: false, message: "Item not found" });

    res.status(200).json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

let deleteItemController = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await Item.findByIdAndDelete(id);
    if (!item) return res.status(404).json({ success: false, message: "Item not found" });

    // delete image from folder
    const oldImage = item.image.split("/").pop();
    const uploadfolder = path.join(__dirname, "../../uploads");
    fs.unlink(uploadfolder + "/" + oldImage, (err) => {
      if (err) console.log("Error deleting image:", err);
    });

    return res.status(200).json({ success: true, message: "Item deleted successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message || error });
  }
};


module.exports = {
  addItemController,
  updateItemController,
  allItemController,
  singleItemBySlugController,
  deleteItemController
};
