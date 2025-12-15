"use client";

import Container from "@/components/common/Container";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";

const page = () => {
  const [cartData, setCartData] = useState([]);
  const [city, setCity] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  // const shipping = 50;
  // const taxRate = 0.05;

  const user = useSelector((state) => state?.userInfo?.value);
  // Fetch Cart Data
  const fetchCart = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API}/cart/singleusercart/${user?._id}`
      );
      const data = await res.json();

      if (data.success) {
        setCartData(data.data);

        // Calculate subtotal (20min)
        const sub = data.data.reduce(
          (acc, item) => acc + item.totalprice * item.quantity,
          0
        );
        setSubtotal(sub);
      }
    } catch (error) {
      console.error("Cart Fetch Error:", error);
    }
  };

  useEffect(() => {
    if (user?._id) {
      fetchCart();
    }
  }, [user, cartData]);

  let handleRemoveItem = (item) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API}/cart/deletecart/${item?._id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // BD api 
  useEffect(() => {
    axios
      .get("https://bdapis.com/api/v1.2/districts")
      .then((res) => {
        setCity(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <div className="bg-white sm:px-15 px-4 py-6">
        <div className="max-md:max-w-xl mx-auto">
          <div className="flex items-start mb-16">
            <div className="w-full">
              <div className="flex items-center w-full">
                <div className="w-8 h-8 shrink-0 -mx-1 bg-red-600 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-semibold">1</span>
                </div>
                <div className="w-full h-[3px] mx-4 rounded-lg bg-red-600" />
              </div>
              <div className="mt-2 mr-4">
                <h6 className="text-sm font-semibold text-slate-900">Cart</h6>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center w-full">
                <div className="w-8 h-8 shrink-0 -mx-1 bg-red-600 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-semibold">2</span>
                </div>
                <div className="w-full h-[3px] mx-4 rounded-lg bg-slate-300" />
              </div>
              <div className="mt-2 mr-4">
                <h6 className="text-sm font-semibold text-slate-900">
                  Checkout
                </h6>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="w-8 h-8 shrink-0 mx-1 bg-slate-300 p-1.5 flex items-center justify-center rounded-full">
                  <span className="text-sm text-white font-semibold">3</span>
                </div>
              </div>
              <div className="mt-2">
                <h6 className="text-sm font-semibold text-slate-400">Order</h6>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12">
            <div className="lg:col-span-2">
              <form>
                <div>
                  <h2 className="text-xl text-slate-900 font-semibold mb-6">
                    Delivery Details
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-y-6 gap-x-4">
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter First Name"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-red-600"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Last Name"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-red-600"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-red-600"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        Phone No.
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Phone No."
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-red-600"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        Address Line
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Address Line"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-red-600"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        City
                      </label>
                      <select className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-red-600">
                        {city.map((item) => (
                          <option key={item.district} value={item.district}>
                            {item.district}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        placeholder="Enter State"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-red-600"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-900 font-medium block mb-2">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Zip Code"
                        className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-red-600"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h2 className="text-xl text-slate-900 font-semibold mb-6">
                    Payment
                  </h2>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="bg-gray-100 p-4 rounded-md border border-gray-300 max-w-sm">
                      <div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="method"
                            className="w-5 h-5 cursor-pointer"
                            id="card"
                            defaultChecked=""
                          />
                          <label
                            htmlFor="card"
                            className="ml-4 flex gap-2 cursor-pointer"
                          >
                            <img
                              src="https://readymadeui.com/images/visa.webp"
                              className="w-12"
                              alt="card1"
                            />
                            <img
                              src="https://readymadeui.com/images/american-express.webp"
                              className="w-12"
                              alt="card2"
                            />
                            <img
                              src="https://readymadeui.com/images/master.webp"
                              className="w-12"
                              alt="card3"
                            />
                          </label>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-slate-500 font-medium">
                        Pay with your debit or credit card
                      </p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-md border border-gray-300 max-w-sm">
                      <div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="method"
                            className="w-5 h-5 cursor-pointer"
                            id="paypal"
                          />
                          <label
                            htmlFor="paypal"
                            className="ml-4 flex gap-2 cursor-pointer"
                          >
                            <img
                              src="https://readymadeui.com/images/paypal.webp"
                              className="w-20"
                              alt="paypalCard"
                            />
                          </label>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-slate-500 font-medium">
                        Pay with your paypal account
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 max-w-md">
                  <p className="text-slate-900 text-sm font-medium mb-2">
                    Do you have a promo code?
                  </p>
                  <div className="flex gap-4">
                    <input
                      type="email"
                      placeholder="Promo code"
                      className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-red-600"
                    />
                    <button
                      type="button"
                      className="flex items-center justify-center font-medium tracking-wide bg-red-600 hover:bg-red-700 px-4 py-2.5 rounded-md text-sm text-white cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="max-lg:-order-1">
              <h2 className="text-xl text-slate-900 font-semibold mb-6">
                Order Summary
              </h2>
              <div className="relative bg-white border border-gray-300 rounded-md">
                <div className="px-6 py-8 md:overflow-auto">
                  <div className="space-y-4">
                    {cartData.map((item) => (
                      <div key={item._id}>
                        <div className="flex gap-4 max-sm:flex-col">
                          <div className="w-24 h-24 shrink-0 bg-purple-50 p-2 rounded-md">
                            <img
                              src={item.product.image[0]}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="w-full flex justify-between gap-4">
                            <div>
                              <h3 className="text-sm font-medium text-slate-900">
                                {item.product.title}
                              </h3>
                              <p className="text-sm font-medium text-slate-500 mt-2">
                                <span className="font-semibold text-slate-900">
                                  {item.variant?.size || ""}
                                </span>
                              </p>
                              <h6 className="text-[15px] text-slate-900 font-semibold mt-4">
                                ৳{item.product.discountprice}
                              </h6>
                              <span className="font-semibold text-base leading-[18px]">
                                Total Price: ৳ {item.totalprice}
                              </span>
                            </div>
                            <div className="flex flex-col justify-between items-end gap-4">
                              <button
                                onClick={() => handleRemoveItem(item)}
                                className="text-gray-500 hover:text-red-500 mt-3 text-xl text-right ml-5"
                              >
                                <RiDeleteBin6Line />
                              </button>
                              <div className="flex items-center gap-3 mt-auto">
                                {/* <button
                                  onClick={() => handledecreQuantity(item)}
                                  type="button"
                                  className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-400 text-white rounded-full"
                                >
                                  -
                                </button> */}

                                <span className="font-semibold text-base leading-[18px]">
                                  Qty: {item.quantity}
                                </span>

                                {/* <button
                                  onClick={() => handleIncreQuantity(item)}
                                  type="button"
                                  className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-400 text-white rounded-full"
                                >
                                  +
                                </button> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr className="border-gray-300 mt-5" />
                      </div>
                    ))}
                  </div>
                  <hr className="border-gray-300 my-6" />
                  <div>
                    <div className="relative">
                      <ul className="text-slate-500 font-medium space-y-4">
                        <li className="flex flex-wrap gap-4 text-sm">
                          Subtotal{" "}
                          <span className="ml-auto font-semibold text-slate-900">
                            ৳{subtotal}
                          </span>
                        </li>
                        <li className="flex flex-wrap gap-4 text-sm">
                          Discount{" "}
                          <span className="ml-auto font-semibold text-slate-900">
                            $0.00
                          </span>
                        </li>
                        <li className="flex flex-wrap gap-4 text-sm">
                          Shipping{" "}
                          <span className="ml-auto font-semibold text-slate-900">
                            $6.00
                          </span>
                        </li>
                        <li className="flex flex-wrap gap-4 text-sm">
                          Tax{" "}
                          <span className="ml-auto font-semibold text-slate-900">
                            $5.00
                          </span>
                        </li>
                        <hr className="border-slate-300" />
                        <li className="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900">
                          Total <span className="ml-auto">$83.00</span>
                        </li>
                      </ul>
                      <div className="space-y-4 mt-8">
                        <button
                          type="button"
                          className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                        >
                          Complete Purchase
                        </button>
                        <button
                          type="button"
                          className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-gray-100 hover:bg-gray-200 border border-gray-300 text-slate-900 cursor-pointer"
                        >
                          Continue Shopping
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
