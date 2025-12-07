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
      <div className="my-25 bg-[#EBEBEB] pl-[169px]">
        <div className="flex py-7 items-center gap-50.5">
          {/* ------- Text Box ------- */}
          <div>
            <div className="flex text-[#C32929] pt-[181px] gap-5">
              <div className="border-t-2 w-10 mt-2"> </div>
              <p className="text-sm font-medium leading-6">DEAL OF THE WEEK</p>
            </div>

            <h2 className="text-7xl font-normal">
              <span className="text-primary font-extrabold">
                {spring?.name?.split(" ")[0]}
              </span>{" "}
              COLLECTION
            </h2>

            <Link
              href={`/category/${spring?.slug}`}
              className="inline-block text-sm font-medium mt-5"
            >
              <span className="border-b">SHOP</span> NOW
            </Link>
            <div className="w-85 h-16 pt-29.5 leading-7 pb-9">
              <ul className="flex justify-between text-3xl font-normal ">
                <li>05</li>
                <li>:</li>
                <li>07</li>
                <li>:</li>
                <li>09</li>
                <li>:</li>
                <li>03</li>
              </ul>
              <ul className="mt-2 flex justify-between text-lg font-bold text-[#767676] ">
                <li>DAYS</li>
                <li>HOURS</li>
                <li>MINS</li>
                <li>SEC</li>
              </ul>
            </div>
            <div>
              
            </div>
          </div>

          {/* ------- Image Box ------- */}
          <div className="w-[226px] h-[263px] xl:w-[426px] xl:h-[543px]">
            <img
              src={spring?.image}
              alt="Spring Image"
              className="object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SpringCollection;
