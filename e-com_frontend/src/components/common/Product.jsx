"use client";

import Link from "next/link";
import React from "react";

const Product = ({ product }) => {
  return (
    <div className="shadow-sm bg-white p-1.5 rounded-md overflow-hidden cursor-pointer hover:shadow-md">
      <Link href={`/shop/${product?.slug}`} className="block">
        <div className="aspect-square">
          <img
            src={product?.image?.[0]}
            alt={product?.title}
            className="w-full h-full object-cover object-top transform-gpu transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>

        <div className="p-3 pb-1.5">
          <div className="flex justify-between">
            <h6 className="text-slate-900 text-lg font-bold truncate">
              {product?.title}
            </h6>
            <h6 className="text-gray-400 text-sm font-medium truncate">
              {product?.price} BDT
            </h6>
          </div>

          <h6 className="text-slate-900 text-sm font-medium truncate">
            {product?.description}
          </h6>
        </div>
      </Link>
    </div>
  );
};

export default Product;
