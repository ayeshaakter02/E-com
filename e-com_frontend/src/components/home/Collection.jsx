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
      <div className="xl:w-[1427px] mx-auto mt-25 mb-24">
        <div className="flex gap-2 2xl:gap-12">

          {/* Women Collection */}
          <div
            className="bg-cover bg-center w-117 xl:h-[600px] xl:w-[690px]"
            style={{ backgroundImage: `url('${women?.image}')` }}
          >
            <div className="pt-100 xl:pt-[467px] pl-10 lg:pb-0">
              <p className="font-normal text-sm leading-6">HOT LIST</p>
              <h2 className="font-bold">
                <span className="font-extrabold text-lg">{women?.name?.split(" ")[0]} </span>
                COLLECTION
              </h2>
              <Link href={`/category/${women?.slug}`} className="mt-[5px] font-semibold">
                <span className="border-b">SHOP</span> NOW
              </Link>
            </div>
          </div>

          <div>
            {/* Men Collection */}
            <div
              className="bg-cover bg-center w-117 xl:h-[285px] xl:w-[690px]"
              style={{ backgroundImage: `url('${men?.image}')` }}
            >
              <div className="pt-[152px] pl-10 pb-10 lg:pb-0">
                <p className="font-normal text-sm leading-6">HOT LIST</p>
                <h2 className="font-bold">
                  <span className="font-extrabold">MEN</span> COLLECTION
                </h2>
                <Link href={`/category/${men?.slug}`} className="mt-[5px] font-semibold">
                  <span className="border-b">SHOP</span> NOW
                </Link>
              </div>
            </div>

            <div className="mt-3 xl:mt-7.5 flex gap-2 xl:gap-7.5">
              {/* Kids Collection */}
              <div
                className="bg-cover bg-center w-57.5 pb-8  xl:h-[285px] xl:w-[330px]"
                style={{ backgroundImage: `url('${kids?.image}')` }}
              >
                <div className="pt-[152px] pl-10">
                  <p className="font-normal text-sm leading-6">HOT LIST</p>
                  <h2 className="font-bold">
                    <span className="font-extrabold">KIDS</span> COLLECTION
                  </h2>
                  <Link href={`/category/${kids?.slug}`} className="mt-[5px] font-semibold">
                    <span className="border-b">SHOP</span> NOW
                  </Link>
                </div>
              </div>

              {/* E-Gift Card (Static) */}
              <div className="w-57.5 pb-8 xl:w-[330px] bg-[#F5E6E0] pt-[109px] pl-10">
                <h2>
                  <span className="font-bold">E-GIFT</span> CARDS
                </h2>
                <p className="mt-2 mb-4 font-normal text-sm leading-6">
                  Surprise someone with the gift they really want.
                </p>
                <p className="mt-2 mb-4 font-medium text-sm leading-6">
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
