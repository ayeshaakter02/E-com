import React from "react";
import Container from "../common/Container";

const Products = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/product/allproduct`
  );
  const { data } = await res.json();
  return (
    <Container>
      <div className="xl:w-[1427px] mx-auto">
        <h2 className="font-paragraph text-red-600 w-150 mx-auto text-center text-5xl font-medium">
          OUR TRENDY <span className="font-extrabold"> PRODUCTS</span>
        </h2>
        <div className="mt-[31px] w-[481px] mx-auto">
          <ul className="flex justify-between text-[16px] font-medium mb-[41px]">
            <li className="hover:text-red-600">ALL</li>
            <li className="hover:text-red-600">NEWARRIVALS </li>
            <li className="hover:text-red-600">BEST SELLER</li>
            <li className="hover:text-red-600">TOP RATING</li>
          </ul>
        </div>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {data.map((item) => (
            <div key={item._id} className="mt-12 shadow-sm bg-white p-1.5 rounded-md overflow-hidden cursor-pointer relative hover:shadow-md">
              <div className="aspect-square">
                <img
                className="mb-3.5 w-full h-full object-cover object-top"
                src={item?.image}
                alt=""
              />
              </div>
              
              <div key={item._id} className="p-3 pb-1.5">
                <p className="font-normal text-sm">Dresses</p>
                <h6 className="text-slate-900 text-sm font-bold truncate">
                  {item?.title}
                </h6>
                <h4>{item?.price} BDT</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="w-30 font-medium text-sm leading-6 mx-auto mt-10.5 border-b-2">
          SEE ALL PRODUCT
        </div>
      </div>
    </Container>
  );
};

export default Products;
