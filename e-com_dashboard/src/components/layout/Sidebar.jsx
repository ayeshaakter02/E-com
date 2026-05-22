import React, { useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { RiProductHuntLine } from "react-icons/ri";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { IoHome } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router'

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const menuItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <IoHome size={20} />,
    },
    {
      title: "Add Category",
      path: "/add-category",
      icon: <MdCategory size={20} />,
    },
    {
      title: "All Category",
      path: "/all-category",
      icon: <BiSolidCategory size={20} />,
    },
    {
      title: "Add Product",
      path: "/add-product",
      icon: <RiProductHuntLine size={20} />,
    },
    {
      title: "All Product",
      path: "/all-product",
      icon: <FaProductHunt size={20} />,
    },
    {
      title: "Logout",
      path: "/logout",
      icon: (
        <LiaSignOutAltSolid
          size={20}
          className="-rotate-90"
        />
      ),
    },
  ];

  return (
      <div
        className={`bg-gray-900 h-screen  text-white transition-all duration-300 ${
          open ? "md:w-100" : "w-20"
        }`}
      >

        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {open && <h1 className="text-2xl font-bold">E-commerce Dashboard</h1>}

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-gray-800"
          >
            {open ? <RxCross2 size={22} /> : <HiMenuAlt1 size={22} />}
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-2 px-3">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition  cursor-pointer select-none"
            >
              {item.icon}

              {open && (
                <span className="text-sm font-medium">
                  {item.title}
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
  );
};

export default Sidebar;