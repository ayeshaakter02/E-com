import React from "react";
import {
  FiSearch,
  FiEdit,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const TABLE_HEAD = [
  "Image",
  "Amount",
  "Date",
  "Status",
  "Account",
  "Action",
];

const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "Visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "Master Card",
    accountNumber: "5678",
    expiry: "09/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "Master Card",
    accountNumber: "5678",
    expiry: "11/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "Visa",
    accountNumber: "7890",
    expiry: "08/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "Netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "Visa",
    accountNumber: "1010",
    expiry: "05/2026",
  },
];

const AllProduct = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen p-6">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        {/* Header */}
        <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Recent Transactions
            </h2>

            <p className="text-gray-500 mt-1">
              These are details about the last transactions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-lg py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-400"
              />

              <FiSearch className="absolute top-3 left-3 text-gray-500" />
            </div>

            {/* Download Button */}
            <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
              <FiSearch />
              Search
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-225 text-left">
            
            <thead className="bg-gray-100 border-y border-gray-200">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="px-6 py-4 text-sm font-medium text-gray-600"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {TABLE_ROWS.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  {/* Transaction */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 border rounded-lg p-2 bg-gray-50">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <h3 className="font-semibold text-gray-800">
                        {item.name}
                      </h3>
                    </div>
                  </td>

                  {/* Amount */}
                  <td className="px-6 py-4 text-gray-700">
                    {item.amount}
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 text-gray-700">
                    {item.date}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium capitalize
                        ${
                          item.status === "paid"
                            ? "bg-green-100 text-green-700"
                            : item.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  {/* Account */}
                  <td className="px-6 py-4">
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {item.account} {item.accountNumber}
                      </h4>

                      <p className="text-sm text-gray-500">
                        Exp: {item.expiry}
                      </p>
                    </div>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <FiEdit className="text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* Footer */}
        <div className="p-5 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-200">

          <button className="border px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2">
            <FiChevronLeft />
            Previous
          </button>

          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-lg border bg-blue-500 text-white">
              1
            </button>

            <button className="w-9 h-9 rounded-lg hover:bg-gray-100">
              2
            </button>

            <button className="w-9 h-9 rounded-lg hover:bg-gray-100">
              3
            </button>

            <button className="w-9 h-9 rounded-lg hover:bg-gray-100">
              ...
            </button>

            <button className="w-9 h-9 rounded-lg hover:bg-gray-100">
              10
            </button>
          </div>

          <button className="border px-4 py-2 rounded-lg hover:bg-gray-100 flex items-center gap-2">
            Next
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;