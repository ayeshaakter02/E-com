import React, { useState } from "react";
import {
  Home,
  User,
  Settings,
  Menu,
  X,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const menuItems = [
    {
      title: "Dashboard",
      icon: <Home size={20} />,
    },
    {
      title: "Profile",
      icon: <User size={20} />,
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
    },
    {
      title: "Logout",
      icon: <LogOut size={20} />,
    },
  ];

  return (
      <div
        className={`bg-gray-900 h-screen  text-white transition-all duration-300 ${
          open ? "md:w-100" : "w-20"
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {open && <h1 className="text-2xl font-bold">E-commerce Dashboard</h1>}

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-gray-800"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Menu */}
        <div className="mt-4 flex flex-col gap-2 px-3">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition"
            >
              {item.icon}

              {open && (
                <span className="text-sm font-medium">
                  {item.title}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
  );
};

export default Sidebar;