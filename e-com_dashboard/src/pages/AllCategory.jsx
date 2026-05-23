import React, { useState } from "react";

const AllCategory = () => {
  const [categories] = useState([
    {
      id: 1,
      name: "Electronics",
      description: "Electronic gadgets and accessories",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      id: 2,
      name: "Fashion",
      description: "Clothing and fashion items",
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
    },
    {
      id: 3,
      name: "Sports",
      description: "Sports accessories and equipment",
      status: "Inactive",
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    },
  ]);

  return (
    <div className="bg-gray-100 min-h-screen w-full p-5">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl p-6">

        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            All Categories
          </h1>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition">
            Add Category
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Image</th>
                <th className="p-3 text-left">Category Name</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((category, index) => (
                <tr
                  key={category.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-3">{index + 1}</td>

                  <td className="p-3">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-16 h-16 rounded-lg object-cover border"
                    />
                  </td>

                  <td className="p-3 font-medium text-gray-800">
                    {category.name}
                  </td>

                  <td className="p-3 text-gray-600">
                    {category.description}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        category.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {category.status}
                    </span>
                  </td>

                  <td className="p-3">
                    <div className="flex justify-center gap-3">
                      
                      <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm">
                        Edit
                      </button>

                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm">
                        Delete
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCategory;