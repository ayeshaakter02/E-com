"use client";

import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import Link from "next/link";
import axios from "axios";

const Collection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/category/allcategory`)
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const women = categories.find((c) => c.slug === "woman-collection");
  const men = categories.find((c) => c.slug === "man-collection");
  const kids = categories.find((c) => c.slug === "kids-collection");

  return (
    <Container>
      <div className="max-w-[1427px] mx-auto mt-16 mb-24 px-4 sm:px-6 xl:px-0">
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-12">
          {/* ================= Women Collection ================= */}
          <Link href={`/category/${women?.slug}`} className="w-full xl:w-1/2">
            <div
              className="relative w-full h-[300px] sm:h-[400px] xl:h-[600px] bg-cover bg-center rounded-md"
              style={{ backgroundImage: `url('${women?.image}')` }}
            >
              <div className="absolute bottom-4 xl:bottom-10 left-4 xl:left-10">
                <p className="text-sm font-normal">HOT LIST</p>
                <h2 className="mt-4 text-xl xl:text-2xl font-bold leading-tight font-paragraph">
                  <span className="font-extrabold">
                    {women?.name?.split(" ")[0]}
                  </span>{" "}
                  COLLECTION
                </h2>
                <p className="mt-1 font-semibold border-b w-fit cursor-pointer">
                  SHOP NOW
                </p>
              </div>
            </div>
          </Link>

          {/* ================= Men + Kids + Gift Cards ================= */}
          <div className="flex flex-col gap-6 xl:gap-7 w-full xl:w-1/2">
            {/* Men Collection */}
            <Link href={`/category/${men?.slug}`}>
              <div
                className="relative w-full h-[150px] sm:h-[200px] xl:h-[285px] bg-cover bg-center rounded-md"
                style={{ backgroundImage: `url('${men?.image}')` }}
              >
                <div className="absolute bottom-4 xl:bottom-10 left-4 xl:left-10">
                  <p className="text-sm font-normal">HOT LIST</p>
                  <h2 className="mt-4 text-xl xl:text-2xl font-bold leading-tight font-paragraph">
                    <span className="font-extrabold">
                      {men?.name?.split(" ")[0]}
                    </span>{" "}
                    COLLECTION
                  </h2>
                  <p className="mt-1 font-semibold border-b w-fit cursor-pointer">
                    SHOP NOW
                  </p>
                </div>
              </div>
            </Link>

            {/* Kids + E-Gift Cards */}
            <div className="flex flex-col sm:flex-row gap-4 xl:gap-6">
              {/* Kids Collection */}
              <Link
                href={`/category/${kids?.slug}`}
                className="w-full sm:w-1/2"
              >
                <div
                  className="relative w-full h-[150px] sm:h-[200px] xl:h-[285px] bg-cover bg-center rounded-md"
                  style={{ backgroundImage: `url('${kids?.image}')` }}
                >
                  <div className="absolute bottom-4 xl:bottom-10 left-4 xl:left-10">
                    <p className="text-sm font-normal">HOT LIST</p>
                    <h2 className="mt-4 text-xl xl:text-2xl font-bold leading-tight font-paragraph">
                      <span className="font-extrabold">{kids?.name?.split(" ")[0]}</span> COLLECTION
                    </h2>
                    <p className="mt-1 font-semibold border-b w-fit cursor-pointer">
                      SHOP NOW
                    </p>
                  </div>
                </div>
              </Link>

              {/* E-Gift Card */}
              <div className="w-full sm:w-1/2 h-[150px] sm:h-[200px] xl:h-[285px] bg-[#F5E6E0] rounded-md p-4 pt-20 xl:pt-40 flex flex-col justify-center">
                <h2 className="text-xl xl:text-2xl font-bold leading-tight font-paragraph">
                  E-GIFT CARDS
                </h2>
                <p className="text-sm mt-1">
                  Surprise someone with the gift they really want.
                </p>
                <p className="text-sm font-medium cursor-pointer border-b w-fit mt-auto mb-3">
                  DISCOVER MORE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Collection;
