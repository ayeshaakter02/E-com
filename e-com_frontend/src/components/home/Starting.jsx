"use client";

import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import Link from "next/link";
import axios from "axios";

const Starting = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/category/allcategory`)
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const women = categories.find((c) => c.slug === "women's-t-shirts");
  const men = categories.find((c) => c.slug === "men's-sportswear");

  return (
    <Container>
      <div className="max-w-[1427px] mx-auto mt-16 mb-24 px-4">
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-12">

          {/* ================= WOMEN ================= */}
          <Link href={`/category/${women?.slug}`} className="w-full xl:w-1/2">
            <div className="relative h-[260px] sm:h-80 xl:h-[398px] grid grid-cols-2 overflow-hidden">

              {/* Left Content */}
              <div className="bg-[#c4001a] flex flex-col justify-center px-10 xl:px-12 text-white z-10">
                <div className="relative h-full flex flex-col justify-end pb-6  text-white">
                <p className="text-sm">STARTING AT $19</p>

                <h2 className="font-medium text-lg sm:text-xl">
                    {women?.name}
                </h2>

                <p className="mt-1 font-semibold">
                  <span className="border-b">SHOP</span> NOW
                </p>
              </div>
              </div>

              {/* Right Image */}
              <div
                className="relative bg-cover bg-center"
                style={{ backgroundImage: `url(${women?.image})` }}
              >
                <div className="absolute inset-0 bg-[#c4001a] opacity-80"></div>
              </div>
            </div>
          </Link>

          {/* ================= MEN ================= */}
          <Link href={`/category/${men?.slug}`} className="w-full xl:w-1/2">
            <div
              className="relative h-[260px] sm:h-80 xl:h-[398px] bg-cover bg-center"
              style={{ backgroundImage: `url(${men?.image})` }}
            >
              <div className="absolute inset-0 bg-black/20"></div>

              <div className="relative h-full flex flex-col justify-end p-6 sm:p-10 text-white">
                <p className="text-sm">STARTING AT $39</p>

                <h2 className="font-medium text-lg sm:text-xl">
                    {men?.name}
                </h2>

                <p className="mt-1 font-semibold">
                  <span className="border-b">SHOP</span> NOW
                </p>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </Container>
  );
};

export default Starting;
