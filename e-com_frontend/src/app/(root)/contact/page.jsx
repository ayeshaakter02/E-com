"use client";

import Container from "@/components/common/Container";
import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";

const page = () => {
  return (
    <Container>
      <section className="max-w-[1427px] mx-auto px-4 sm:px-8 xl:px-32 py-16 sm:py-20">

        {/* ---------- Heading ---------- */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold font-paragraph">
            CONTACT <span className="text-red-600">US</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-7">
            Have questions, feedback, or need support?  
            We’re here to help you with anything you need.
          </p>
        </div>

        {/* ---------- Main Grid ---------- */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-start">

          {/* ---------- Contact Info ---------- */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-paragraph mb-3">
                Get In Touch
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-7">
                Reach out to us for product inquiries, order support, or any
                general questions. Our support team is always ready to assist
                you.
              </p>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-gray-700">
              <div>
                <p className="font-semibold flex items-center gap-2"><FaAddressCard className="text-red-700" /> Address</p>
                <p>1418 River Drive, Suite 35, Cottonhall, CA 9622, USA</p>
              </div>

              <div>
                <p className="font-semibold flex items-center gap-2"><MdEmail className="text-red-700" /> Email</p>
                <p>sale@uomo.com</p>
              </div>

              <div>
                <p className="font-semibold flex items-center gap-2"><FaPhoneAlt className="text-red-700"/> Phone</p>
                <p>+1 246-345-0695</p>
              </div>

              <div>
                <p className="font-semibold flex items-center gap-2"><FcAlarmClock /> Support Hours</p>
                <p>Monday – Sunday: 9:00 AM – 10:00 PM</p>
              </div>
            </div>

            {/* ---------- Map Placeholder ---------- */}
            <div className="bg-[#EBEBEB] h-[220px] sm:h-[260px] rounded-lg flex items-center justify-center text-gray-500 text-sm">
              Google Map Location
            </div>
          </div>

          {/* ---------- Contact Form ---------- */}
          <div className="bg-[#F8F8F8] p-6 sm:p-10 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold font-paragraph mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full h-12 px-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-12 px-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full h-12 px-4 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 text-sm font-semibold rounded-md hover:bg-red-700 transition"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

        </div>
      </section>
    </Container>
  );
};

export default page;