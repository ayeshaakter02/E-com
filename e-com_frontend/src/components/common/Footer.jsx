import React from "react";
import Container from "./Container";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      {/* ================= MAIN FOOTER ================= */}
      <div className="bg-[#EBEBEB]">
        <div className="max-w-[1427px] mx-auto py-25 font-roboto">
          <div className="xl:flex pl-20 xl:pl-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
              {/* ---------- Brand ---------- */}
              <div>
                <Link
                  href="/"
                  className="font-logo text-3xl font-bold text-red-700"
                >
                  Benimle hazırlan
                </Link>

                <p className="mt-6 font-medium text-sm leading-6">
                  1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
                </p>

                <p className="mt-4 mb-6 font-medium text-sm leading-6">
                  sale@uomo.com <br /> +1 246-345-0695
                </p>

                <ul className="flex gap-4 text-sm">
                  <li className="cursor-pointer hover:text-red-600">
                    <FaFacebookF />
                  </li>
                  <li className="cursor-pointer text-gray-400 hover:text-red-600">
                    <FaTwitter />
                  </li>
                  <li className="cursor-pointer hover:text-red-600">
                    <FaInstagram />
                  </li>
                  <li className="cursor-pointer hover:text-red-600">
                    <FaYoutube />
                  </li>
                  <li className="cursor-pointer hover:text-red-600">
                    <FaPinterest />
                  </li>
                </ul>
              </div>

              {/* ---------- Company ---------- */}
              <div className="xl:ml-4">
                <h2 className="font-extrabold text-2xl font-paragraph">
                  COMPANY
                </h2>
                <ul className="font-medium text-sm leading-8 mt-5 tracking-wider">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Affiliates</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              {/* ---------- Shop ---------- */}
              <div>
                <h2 className="font-extrabold text-2xl font-paragraph">SHOP</h2>
                <ul className="font-medium text-sm leading-8 mt-5 tracking-wider">
                  <li>New Arrivals</li>
                  <li>Accessories</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>Shop All</li>
                </ul>
              </div>

              {/* ---------- Help ---------- */}
              <div>
                <h2 className="font-extrabold text-2xl font-paragraph">HELP</h2>
                <ul className="font-medium text-sm leading-8 mt-5 tracking-wider">
                  <li>Customer Service</li>
                  <li>My Account</li>
                  <li>Find a Store</li>
                  <li>Legal & Privacy</li>
                  <li>Contact</li>
                  <li>Gift Card</li>
                </ul>
              </div>
            </div>

            {/* ---------- Subscribe ---------- */}
            <div className="max-w-md">
              <h2 className="font-extrabold text-2xl font-paragraph">
                SUBSCRIBE
              </h2>

              <p className="font-normal text-sm leading-6 mt-5 mb-4 tracking-wider">
                Be the first to get the latest news about trends, promotions,
                and much more!
              </p>

              <input
                className="w-full h-12 bg-white px-4 text-sm"
                placeholder="Your email address"
                type="text"
              />

              <p className="mt-8 mb-3 font-medium text-sm">Secure payments</p>

              <div className="flex gap-4">
                <img
                  src="../images/bKash.webp"
                  className="w-20 h-15 object-contain"
                />
                <img
                  src="../images/nagad.jpg"
                  className="w-30 h-15 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="text-center my-5 lg:text-2xl sm:text-lg font-extrabold font-paragraph px-4">
        Copyright ©2026 All rights reserved | Developed by
        <Link
          className="ml-2 text-blue-600"
          href="https://github.com/ayeshaakter02"
        >
          Ayesha
        </Link>
      </div>
    </Container>
  );
};

export default Footer;
