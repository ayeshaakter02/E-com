import React from 'react'
import Container from '../common/Container'

const Category = async () => {
    const res = await fetch (`${process.env.NEXT_PUBLIC_API}/category/allcategory`)
    const {data} = await res.json()
  return (
    <div>
        <Container>
            <div className="bg-gray-100 rounded-[20px] sm:p-6 p-5 mt-8">
  <div className="mx-auto">
    <h2 className="text-slate-900 text-xl font-bold mb-4">
      Featured Categories
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {data.map((item)=>(
        <div className="shadow-sm bg-white p-1.5 rounded-md overflow-hidden cursor-pointer relative hover:shadow-md">
        <a href="javascript:void(0);" className="block">
          <div className="bg-gray-200 aspect-square">
            <img
              src={item.image}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div 
          key={item._id}
          className="p-3 pb-1.5 text-center">
            <h6 className="text-slate-900 text-sm font-bold truncate">
              {item.name}
            </h6>
          </div>
        </a>
      </div>
      ))}
    </div>
  </div>
</div>

        </Container>
    </div>
  )
}

export default Category