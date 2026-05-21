import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'

const Rootlayout = () => {
  return (
    <div className='flex gap-1'>
    <Sidebar/>
    <Outlet/>
    </div>
  )
}

export default Rootlayout