"use client";

import Container from "@/components/common/Container";
import React from "react";

const page = () => {
t
  return (
    <Container>
      <section className="max-w-[1427px] mx-auto px-4 sm:px-8 xl:px-32 py-16 sm:py-20">
        {/* ---------- Heading ---------- */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-paragraph">
            ABOUT <span className="text-red-600">US</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-7">
            <span className="font-semibold">Benimle Hazırlan</span> is a modern
            and trusted e-commerce platform dedicated to providing high-quality,
            trendy, and affordable products. We aim to make online shopping
            easy, safe, and enjoyable for everyone.
          </p>
        </div>
        {/* ---------- Main Grid ---------- */}
        <div className="grid-cols-1 xl:grid-cols-2 gap-14 items-center">
          {/* ---------- Left Content ---------- */}
          <div>
            <div className="flex">
              <div>
                <h3 className="text-2xl font-bold font-paragraph mb-4">
                  Who We Are
                </h3>

                <p className="text-sm sm:text-base leading-7 text-gray-700 mb-4">
                  Benimle Hazırlan is a modern e-commerce platform focused on
                  delivering trendy, high-quality, and affordable products. We
                  aim to make online shopping simple, secure, and enjoyable for
                  everyone.
                </p>

                <p className="text-sm sm:text-base leading-7 text-gray-700 mb-8">
                  Our team works continuously to bring new collections, reliable
                  services, and customer-focused solutions to enhance your
                  shopping experience.
                </p>
              </div>
              {/* ---------- Right Mission Box ---------- */}
              <div className="relative bg-[#EBEBEB] rounded-xl p-8 sm:p-12 h-full flex items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-paragraph mb-4">
                    Our Mission
                  </h3>
                  <p className="text-sm sm:text-base leading-7 text-gray-700">
                    Our mission is to bring premium-quality and stylish products
                    to our customers at competitive prices while delivering a
                    smooth and reliable shopping experience.
                  </p>
                </div>

                {/* Decorative line */}
                <div className="absolute top-6 right-6 w-16 h-1 bg-red-600 hidden sm:block"></div>
              </div>
            </div>

            {/* ---------- Stats ---------- */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-10 lg:my-10">
              <div className="bg-[#F5F5F5] py-6 rounded-lg">
                <h4 className="text-2xl font-extrabold text-red-600">10K+</h4>
                <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
              </div>
              <div className="bg-[#F5F5F5] py-6 rounded-lg">
                <h4 className="text-2xl font-extrabold text-red-600">500+</h4>
                <p className="text-sm text-gray-600 mt-1">Products</p>
              </div>
              <div className="bg-[#F5F5F5] py-6 rounded-lg">
                <h4 className="text-2xl font-extrabold text-red-600">24/7</h4>
                <p className="text-sm text-gray-600 mt-1">Support</p>
              </div>
              <div className="bg-[#F5F5F5] py-6 rounded-lg">
                <h4 className="text-2xl font-extrabold text-red-600">100%</h4>
                <p className="text-sm text-gray-600 mt-1">Secure Payment</p>
              </div>
            </div>

            {/* ---------- Why Choose Us ---------- */}
            <div className="mb-10">
              <h3 className="text-2xl font-extrabold font-paragraph mb-4">
                Why Choose Us
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700 list-disc pl-5">
                <li>Carefully selected, quality-checked products</li>
                <li>Affordable and transparent pricing</li>
                <li>Fast and reliable delivery service</li>
                <li>Secure and trusted payment methods</li>
                <li>Dedicated customer support</li>
              </ul>
            </div>

            {/* ---------- Commitment ---------- */}
            <div className="mb-10">
              <h3 className="text-2xl font-extrabold font-paragraph mb-4">
                Our Commitment
              </h3>
              <p className="text-sm sm:text-base leading-7 text-gray-700">
                We are committed to customer satisfaction, data security, and
                continuous improvement. Your trust is our biggest achievement,
                and we work every day to earn it.
              </p>
            </div>

            {/* ---------- Closing ---------- */}
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base font-medium text-gray-800">
                Thank you for choosing <b>Benimle Hazırlan</b> as your shopping
                partner.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Shop smart. Shop with confidence
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default page;
