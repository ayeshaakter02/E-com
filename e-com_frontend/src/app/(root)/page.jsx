import Banner from '@/components/home/Banner'
import Category from '@/components/home/Category'
import Collection from '@/components/home/Collection'
import Products from '@/components/home/Products'
import React from 'react'

const page = () => {
  return (
    <div>
      <Banner/>
      {/* <Category/> */}
      <Collection/>
      <Products/>
    </div>
  )
}

export default page