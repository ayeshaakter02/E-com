"use client";

import React, { useEffect, useState } from "react";
import Container from "../common/Container";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API}/product/allproduct`)
      .then((res) => res.json())
      .then((data) => setProducts(data.data))
      .catch((err) => console.log(err));
  }, []);

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <Container>
      <div className="max-w-[1427px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ---------- Heading ---------- */}
          <h2 className="font-semibold text-red-600 font-paragraph text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl mt-8">
          OUR TRENDY
          <span className="font-extrabold"> PRODUCTS</span>
        </h2>
        
        
        {/* ---------- Filter Menu ---------- */}
        <div className="mt-6 max-w-md mx-auto font-roboto">
          <ul className="flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-0 text-sm sm:text-base font-semibold mb-10">
            <li className="hover:text-red-600 cursor-pointer">ALL</li>
            <li className="hover:text-red-600 cursor-pointer">NEW ARRIVALS</li>
            <li className="hover:text-red-600 cursor-pointer">BEST SELLER</li>
            <li className="hover:text-red-600 cursor-pointer">TOP RATING</li>
          </ul>
        </div>

        {/* ---------- Product Grid ---------- */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {visibleProducts.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-sm rounded-md overflow-hidden cursor-pointer hover:shadow-md transition"
            >
              <div className="aspect-square">
                <img
                  className="w-full h-full object-cover object-top"
                  src={item?.image}
                  alt={item?.title}
                />
              </div>

              <div className="p-3">
                <p className="text-sm text-gray-500">Dresses</p>
                <h6 className="text-sm font-bold truncate">
                  {item?.title}
                </h6>
                <h4 className="font-semibold mt-1">
                  {item?.price} BDT
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- SEE ALL BUTTON ---------- */}
        {products.length > 4 && (
          <div
            onClick={() => setShowAll(!showAll)}
            className="w-fit mx-auto mt-6 text-sm sm:text-base font-medium border-b-2 cursor-pointer hover:text-red-600"
          >
            {showAll ? "SHOW LESS" : "SEE ALL PRODUCT"}
          </div>
        )}

      </div>
    </Container>
  );
};

export default Products;
