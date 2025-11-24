"use client"

import React, { useEffect, useState } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Container from "../common/Container";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


const Banner = () => {
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API}/banner/allbanners`).then((res)=> {
            setBanners(res.data.data)
        }).catch((err) => {
        console.log(err)
        })
    }, [])

// Custom Next Button
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-10 h-10 absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition z-10 flex justify-center items-center"
  >
    <FaArrowRight />
  </button>
);

// Custom Prev Button
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-10 h-10 absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black transition z-10 flex justify-center items-center"
  >
    <FaArrowLeft />
  </button>
);

      const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section>
      <Container>
        <Slider {...settings}>
                {banners.map((item)=>(
                <>
                <img src={item.image} alt="banner" className="w-full h-195 object-cover" />
                </>
            ))}
            </Slider>
      </Container>
            

    </section>
  )
}

export default Banner