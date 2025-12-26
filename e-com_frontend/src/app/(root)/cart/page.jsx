"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import Container from "@/components/common/Container";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
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
      console.log("API CART DATA:", data);

      if (data.success) {
        setCartData(data.data);

        // Calculate subtotal (20min)
        const sub = data.data.reduce(
          (acc, item) => acc + Number(item.totalprice || 0),
          0
        );
        setSubtotal(sub);
      }
    } catch (error) {
      console.error("Cart Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?._id) {
      fetchCart();
    }
  }, [user, cartData]);

  // const tax = (subtotal * taxRate).toFixed(2);
  // const total = subtotal + shipping;

  // handle Remove Button k real-time korar jonno Socket.io use korte hobe
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

  const handleIncreQuantity = (item) => {
    let quantity = item.quantity + 1;
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_API}/cart/updatequantity/${user?._id}`,
        {
          quantity: quantity,
          product: item.product._id,
          variant: item?.variant?._id,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handledecreQuantity = (item) => {
    if (item.quantity > 1) {
      let quantity = item.quantity - 1;
      axios
        .patch(
          `${process.env.NEXT_PUBLIC_API}/cart/updatequantity/${user?._id}`,
          {
            quantity: quantity,
            product: item.product._id,
            variant: item?.variant?._id,
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <Container className="mx-auto mt-5">
      <div className="mx-auto max-w-7xl md:p-4 bg-white">
        <h1 className="text-3xl font-paragraph font-extrabold text-red-700 mb-5">
          Your Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT CART LIST */}
          <div className="lg:col-span-2 space-y-6">
            {loading ? (
              <p>Loading...</p>
            ) : cartData.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              cartData.map((item) => (
                <div
                  key={item._id}
                  className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200"
                >
                  <div className="flex gap-6 sm:gap-4 max-sm:flex-col">
                    <div className="w-24 h-24 max-sm:w-24 max-sm:h-24 shrink-0">
                      <img
                        src={item.product.image[0]}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex flex-col gap-4">
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                          {item.product.title}
                        </h3>

                        <p className="text-[13px] font-medium text-slate-500 mt-2">
                          <span className="font-semibold text-slate-900">
                            {item.variant?.size || ""}
                          </span>
                        </p>
                      </div>

                      <div className="mt-auto">
                        <h3 className="text-sm font-semibold text-slate-900">
                          ৳{item.product.discountprice}
                        </h3>
                      </div>
                      <span className="font-semibold text-base leading-[18px]">
                        Total Price: ৳ {item.totalprice}
                      </span>
                    </div>
                  </div>

                  <div className="ml-auto flex flex-col">
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="text-gray-500 hover:text-red-500 mt-3 text-xl text-right ml-5"
                    >
                      <RiDeleteBin6Line />
                    </button>
                    <div className="flex items-center gap-3 mt-auto">
                      <button
                        onClick={() => handledecreQuantity(item)}
                        type="button"
                        className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-400 text-white rounded-full"
                      >
                        -
                      </button>

                      <span className="font-semibold text-base leading-[18px]">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => handleIncreQuantity(item)}
                        type="button"
                        className="flex items-center justify-center w-[18px] h-[18px] cursor-pointer bg-slate-400 text-white rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT SUMMARY BOX */}
          <div className="mt-5 space-y-6 lg:mt-0">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
              <h3 className="text-lg font-bold text-slate-900 mb-6">
                Order Summary
              </h3>

              <ul className="text-slate-500 font-medium space-y-4">
                <li className="flex flex-wrap gap-4 text-sm">
                  Subtotal{" "}
                  <span className="ml-auto font-semibold text-slate-900">
                    ৳{subtotal}
                  </span>
                </li>
                {/* 
                <li className="flex flex-wrap gap-4 text-sm">
                  Shipping{" "}
                  <span className="ml-auto font-semibold text-slate-900">
                    ৳{shipping}
                  </span>
                </li> */}
                {/* 
                <li className="flex flex-wrap gap-4 text-sm">
                  Tax{" "}
                  <span className="ml-auto font-semibold text-slate-900">
                    ৳{tax}
                  </span>
                </li> */}

                <hr className="border-slate-300" />

                <li className="flex flex-wrap gap-4 text-sm font-semibold text-slate-900">
                  Total <span className="ml-auto">৳{subtotal}</span>
                </li>
              </ul>

              <Link
                href="/checkout"
                className="block text-center w-full px-4 py-3 mt-6 text-sm font-semibold tracking-wide text-white bg-red-700 rounded-md hover:bg-red-600"
              >
                Checkout
              </Link>
              <Link
                href={"/shop"}
                className="block text-center w-full px-4 py-3 mt-6 text-sm font-semibold tracking-wide text-white bg-red-700 rounded-md hover:bg-red-600"
              >
                Continue Shopping
              </Link>
            </div>

            {/* <div className="bg-white rounded-lg shadow-md p-6 border border-gray-300">
              <h4 className="flex items-center gap-2 font-semibold text-slate-900 mb-4">
                Discount Code
              </h4>

              <form>
                <div>
                  <input
                    type="text"
                    placeholder="Discount code"
                    className="px-4 py-3 border border-slate-300 w-full text-sm rounded-md"
                  />
                </div>

                <button
                  type="button"
                  className="w-full px-6 py-3 mt-3 text-sm tracking-wide border border-slate-300 text-slate-900 rounded-md hover:bg-slate-100"
                >
                  Apply
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
