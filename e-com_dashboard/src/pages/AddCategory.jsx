import React, { useState } from "react";

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: "",
    description: "",
    status: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setCategory({
      ...category,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(category);

    alert("Category Added Successfully!");
  };

  return (
    <div className="bg-gray-100 min-h-screen w-full flex justify-center items-center p-3">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Add Category
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Category Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category Name
            </label>

            <input
              type="text"
              name="name"
              value={category.name}
              onChange={handleChange}
              placeholder="Enter category name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Category Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category Description
            </label>

            <textarea
              name="description"
              value={category.description}
              onChange={handleChange}
              placeholder="Enter category description"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          {/* Category Image */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category Image
            </label>

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Category Status */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category Status
            </label>

            <select
              name="status"
              value={category.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Add Category
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddCategory;