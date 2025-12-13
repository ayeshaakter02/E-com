import Container from "@/components/common/Container";
import Product from "@/components/common/Product";
import React from "react";

async function getAllproducta() {
  let res = await fetch(`${process.env.NEXT_PUBLIC_API}/product/allproduct`);

  return await res.json();
}
const page = async () => {
  let { data } = await getAllproducta();
  console.log(data);
  return (
    <div>
      <Container>
        <div className="bg-gray-100 rounded-[20px] sm:p-6 p-5 mt-8">
          <div className="mx-auto">
            <h2 className="text-slate-900 text-xl font-bold mb-4">
              Featured products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {data?.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
