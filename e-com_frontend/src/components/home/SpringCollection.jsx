"use client";
import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import Link from "next/link";
import axios from "axios";

const SpringCollection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/category/allcategory`)
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const spring = categories.find((c) => c.slug === "spring-collection");

  return (
    <Container>
      <div className="my-16 bg-[#EBEBEB] px-4 sm:px-8 xl:px-32">
        <div className="flex flex-col-reverse xl:flex-row items-center gap-10 xl:gap-24 py-10">

          {/* ================= TEXT BOX ================= */}
          <div className="w-full xl:w-1/2 text-center xl:text-left xl:mt-40">

            {/* Deal text */}
            <div className="flex justify-center xl:justify-start items-center gap-4 text-[#C32929]">
              <div className="border-t-2 w-10 mt-1"></div>
              <p className="text-sm font-medium">DEAL OF THE WEEK</p>
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-3xl sm:text-5xl xl:text-7xl font-medium leading-tight font-paragraph">
              <span className="text-primary font-extrabold">
                {spring?.name?.split(" ")[0]}
              </span>{" "}
              COLLECTION
            </h2>

            {/* Shop now */}
            <Link
              href={`/category/${spring?.slug}`}
              className="inline-block text-sm font-medium mt-5"
            >
              <span className="border-b">SHOP</span> NOW
            </Link>

            {/* Countdown */}
            <div className="mt-8 xl:mt-20 flex flex-col items-center xl:items-start">
              <ul className="flex gap-3 sm:gap-6 text-2xl sm:text-3xl font-normal">
                <li>05</li>
                <li>:</li>
                <li>07</li>
                <li>:</li>
                <li>09</li>
                <li>:</li>
                <li>03</li>
              </ul>

              <ul className="mt-2 flex gap-4 sm:gap-8 text-sm sm:text-lg font-bold text-[#767676]">
                <li>DAYS</li>
                <li>HOURS</li>
                <li>MINS</li>
                <li>SEC</li>
              </ul>
            </div>
          </div>

          {/* ================= IMAGE BOX ================= */}
          <div className="w-full sm:w-[300px] xl:w-[426px]">
            <img
              src={spring?.image}
              alt="Spring Collection"
              className="w-full h-[260px] sm:h-[360px] xl:h-[543px] object-cover shadow-lg mx-auto"
            />
          </div>

        </div>
      </div>
    </Container>
  );
};

export default SpringCollection;
