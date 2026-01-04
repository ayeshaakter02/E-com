"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

const ItemPage = () => {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    axios
      .get(`${process.env.NEXT_PUBLIC_API}/item/${slug}`)
      .then((res) => setItem(res.data.data))
      .catch((err) => setError("Item not found"))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;

  return (
    <div className="p-4 bg-gray-100">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div className="bg-white p-3">
            <InnerImageZoom
              src={item.image}
              zoomSrc={item.image}
              width={700}
              height={450}
              zoomType="hover"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">{item.title}</h1>
            <p className="text-slate-600 mt-3">{item.description}</p>

            <div className="flex items-center gap-4 mt-6">
              {item.discountprice && (
                <p className="line-through text-gray-400 flex items-center">
                  {item.price} <FaBangladeshiTakaSign />
                </p>
              )}
              <p className="text-purple-700 text-2xl font-bold flex items-center">
                {item.discountprice || item.price} <FaBangladeshiTakaSign />
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Category: {item.subcategory?.category?.name} / {item.subcategory?.name}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ItemPage;
