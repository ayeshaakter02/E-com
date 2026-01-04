"use client";

import Link from "next/link";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const ItemCard = ({ item }) => {
  return (
    <Link
      href={`/woman-collection/${item.slug}`}
      className="bg-white rounded-lg p-3 shadow hover:shadow-lg transition"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-52 object-cover rounded"
      />
      <div className="mt-2">
        <h3 className="text-sm font-semibold text-slate-900 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-xs text-slate-500 line-clamp-2 mt-1">
          {item.description}
        </p>
        <p className="text-purple-700 font-bold mt-2 flex items-center">
          {item.discountprice || item.price}
          <FaBangladeshiTakaSign className="ml-1 text-sm" />
        </p>
      </div>
    </Link>
  );
};

export default ItemCard;
