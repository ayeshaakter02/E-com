"use client";
import React, { useEffect, useState } from "react";
import Container from "../common/Container";
import Link from "next/link";
import axios from "axios";

const SpringCollection = () => {
  const [categories, setCategories] = useState([]);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/category/allcategory`)
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const spring = categories.find((c) => c.slug === "spring-collection");

  // Countdown timer
  useEffect(() => {
    // Set your target date here
    const targetDate = new Date("2026-01-10T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
                <li>{timeLeft.days}</li>
                <li>:</li>
                <li>{timeLeft.hours}</li>
                <li>:</li>
                <li>{timeLeft.minutes}</li>
                <li>:</li>
                <li>{timeLeft.seconds}</li>
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