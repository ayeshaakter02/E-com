"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import Container from "./Container";
import { useSelector } from "react-redux";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Get user data from Redux store
  const user = useSelector((state) => state.userInfo.value);
console.log(user)

  return (
    <Container>
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-logo text-3xl font-bold text-red-700">
            Benimle hazırlan
          </Link>

          {/* Desktop Navigation */}
          <div className="xl:flex gap-15">
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="font-paragraph text-xl hover:text-red-600 font-medium">
                Home
              </Link>
              <Link href="/new-arrivals" className="font-paragraph text-xl hover:text-red-600 font-medium">
                New Arrivals
              </Link>
              <Link href="/shop" className="font-paragraph text-xl hover:text-red-600 font-medium">
                Shop
              </Link>
              <Link href="/contact" className="font-paragraph text-xl hover:text-red-600 font-medium">
                Contact
              </Link>
              <Link href="/aboutus" className="font-paragraph text-xl hover:text-red-600 font-medium">
                About Us
              </Link>
            </nav>

            {/* Search Bar (Desktop) */}
            <div className="hidden md:flex items-center xl:w-100 bg-gray-100 rounded-full px-3 py-2 mt-2">
              <Search className="text-gray-500 mr-2" size={18} />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5">
            {user ? (
              <span className="text-gray-700 font-medium hidden md:inline">
                Hi, {user?.name}
              </span>
            ) : (
              <Link href="/login" className="text-gray-700 hover:text-red-600">
                <User size={22} />
              </Link>
            )}

            <Link href="/cart" className="relative text-gray-700 hover:text-red-600">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden hover:text-red-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
            <nav className="flex flex-col space-y-2 mt-3">
              <Link href="/" className="font-paragraph font-semibold hover:text-red-600 text-[18px]">
                Home
              </Link>
              <Link href="/new-arrivals" className="font-paragraph font-semibold hover:text-red-600 text-[18px]">
                New Arrivals
              </Link>
              <Link href="/shop" className="font-paragraph font-semibold hover:text-red-600 text-[18px]">
                Shop
              </Link>
              <Link href="/contact" className="font-paragraph font-semibold hover:text-red-600 text-[18px]">
                Contact
              </Link>
              <Link href="/aboutus" className="font-paragraph font-semibold hover:text-red-600 text-[18px]">
                About Us
              </Link>
            </nav>

            {/* Mobile Search */}
            <div className="mt-3 flex items-center bg-gray-100 rounded-full px-3 py-2">
              <Search className="mr-2" size={18} />
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>

            {/* Mobile User Greeting */}
            {user && (
              <p className="mt-3 text-gray-700 font-medium">
                Hi, {user?.name}
              </p>
            )}
          </div>
        )}
      </header>
    </Container>
  );
}
