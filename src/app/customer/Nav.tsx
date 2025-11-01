"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BsChevronDown,
  BsExclamationTriangle,
  BsHouseDoor,
  BsPen,
  BsPerson,
  BsPersonCircle,
} from "react-icons/bs";

const Nav = () => {
  const pathname = usePathname();
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);

  const navigations = [
    {
      name: "My Profile",
      link: "/customer/profile",
      icon: <BsPersonCircle className="text-xl" />,
    },
    {
      name: "Orders",
      link: "/customer/orders",
      icon: <BsHouseDoor className="text-xl" />,
    },
  ];

  return (
    <aside className="bg-white w-3/12 rounded-sm overflow-clip">
      <ul className="space-y-1">
        {navigations.map((nav, index) => {
          const isActive = pathname === nav.link;
          return (
            <li key={index}>
              <Link
                href={nav.link}
                className={`flex items-center gap-x-4 p-3 pl-5 duration-100 w-full border-l-4 ${
                  isActive
                    ? "font-medium bg-gray-300 border-blue-500"
                    : "hover:font-medium hover:bg-gray-200/50 border-transparent"
                }`}
              >
                {nav.icon}
                {nav.name}
              </Link>
            </li>
          );
        })}

        <li>
          <div
            onClick={() => setShowAccountDropdown(!showAccountDropdown)}
            className="flex items-center justify-between pl-5 p-3 duration-100 hover:bg-gray-200/50 cursor-pointer hover:font-medium select-none"
          >
            <div className="flex items-center gap-x-4">
              <BsPerson className="text-xl" /> Account Management
            </div>
            <BsChevronDown
              className={`text-xl transition-transform duration-200 ${
                showAccountDropdown ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>

          {showAccountDropdown && (
            <ul className="mt-1 space-y-1">
              <li>
                <Link
                  href={"/customer/account"}
                  className={`flex items-center gap-x-4 p-3 pl-8 duration-100 border-l-4 ${
                    pathname === "/customer/account"
                      ? "font-medium bg-gray-300 border-blue-500"
                      : "hover:bg-gray-200/50 border-transparent hover:font-medium"
                  }`}
                >
                  <BsPen className="text-xl" />
                  Edit Details
                </Link>
              </li>
              <li>
                <Link
                  href="/customer/delete-account"
                  className={`flex items-center gap-x-4 p-3 pl-8 duration-100 border-l-4 text-red-600 ${
                    pathname === "/customer/delete-account"
                      ? "font-medium bg-gray-300 border-red-500"
                      : "hover:bg-gray-200/50 hover:font-medium border-transparent"
                  }`}
                >
                  <BsExclamationTriangle className="text-xl" />
                  Delete Account
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
};

export default Nav;
