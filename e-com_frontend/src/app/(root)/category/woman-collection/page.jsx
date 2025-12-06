"use client"; // important for client-side fetching

import React, { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/item/all");
        setItems(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">All Items</h1>

      {items.map((item) => (
        <div
          key={item._id}
          className="border rounded-lg p-4 mb-4 shadow hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="font-bold mt-2">Price: BDT {item.price}</p>
          <p className="text-gray-500 mt-1">
            Category: {item.subcategory?.category?.name || "N/A"} /{" "}
            {item.subcategory?.name || "N/A"}
          </p>
          <img
            src={item.image}
            alt={item.title}
            className="w-48 h-48 object-cover mt-2 rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default page;
