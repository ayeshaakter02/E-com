import React from "react";
import Container from "../common/Container";
import Link from "next/link";

const Collection = () => {
  return (
    <>
      <Container>
        <div className="w-[1427px] mx-auto mt-25 mb-24">
          <div className="flex gap-12">
            <div className="bg-cover bg-center h-[600px] w-[690px]" style={{ backgroundImage: "url('../images/woman-collection.png')" }}>
              <div className="pt-[467px] pl-10">
                <p className="font-normal text-sm leading-6">HOT LIST</p>
              <h2 className="font-bold"><span className="font-extrabold text-lg">WOMEN
                </span> COLLECTION</h2>
              <Link href="/shop" className="mt-[5px] font-semibold"><span className="border-b-1">SHOP</span> NOW</Link>
              </div>
            </div>
            <div>
              <div className="bg-cover bg-center h-[285px] w-[690px]" style={{ backgroundImage: "url('../images/man-collection.png')" }}>
                <div className="pt-[152px] pl-10">
                    <p className="font-normal text-sm leading-6">HOT LIST</p>
                    <h2 className="font-bold"><span className="font-extrabold">MEN</span>  COLLECTION</h2>
                    <Link href="/shop" className="mt-[5px] font-semibold"><span className="border-b">SHOP</span> NOW</Link>
                </div>
              </div>
              <div className="mt-7.5 flex gap-7.5">
                <div className="bg-cover bg-center h-[285px] w-[330px]" style={{ backgroundImage: "url('../images/kids-collection.png')" }}>
                  <div className="pt-[152px] pl-10">
                    <p className="font-normal text-sm leading-6">HOT LIST</p>
                    <h2 className="font-bold"><span className="font-extrabold">KIDS</span>  COLLECTION</h2>
                    <Link href="/shop" className="mt-[5px] font-semibold"><span className="border-b">SHOP</span> NOW</Link>
                </div>
                </div>
                <div className="w-[330px] bg-[#F5E6E0] pt-[109px] pl-10">
                  <h2>
                    <span className="font-bold">E-GIFT</span>CARDS
                  </h2>
                  <p className="mt-2 mb-4 font-normal text-sm leading-6">Surprise someone with the gift they really want.</p>
                  <p className="mt-2 mb-4 font-medium text-sm leading-6"> DISCOVER MORE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Collection;
