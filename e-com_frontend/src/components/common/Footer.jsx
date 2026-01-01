import React from "react";
import Container from "./Container";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="flex bg-[#EBEBEB] px-56 py-25">
        <div>
          <Link href="/" className="font-logo text-3xl font-bold text-red-700">
            Benimle hazırlan
          </Link>
          <p className="mt-11 font-medium text-sm leading-6">
            1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
          </p>
          <p className="mt-5 font-medium text-sm leading-6">sale@uomo.com +1 246-345-0695</p>
          <ul className="flex justify-between font-normal text-sm">
            <li>
              <FaFacebookF />
            </li>
            <li className="text-gray-400">
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaPinterest />
            </li>
          </ul>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
};

export default Footer;
