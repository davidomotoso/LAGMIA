"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsHouseDoor, BsPerson, BsPersonCircle } from "react-icons/bs";

const Nav = () => {
  const pathname = usePathname();

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
    {
      name: "Account Management",
      link: "/customer/account",
      icon: <BsPerson className="text-xl" />,
    },
  ];
  return (
    <aside className="bg-white w-3/12 rounded-sm overflow-clip">
      <ul>
        {navigations.map((nav, index) => {
          const isActive = pathname === nav.link;
          return (
            <li key={index}>
              <Link
                href={nav.link}
                className={`flex items-center gap-x-4 p-3 pl-5 duration-100 w-full ${
                  isActive
                    ? "font-medium bg-gray-300"
                    : "hover:font-medium hover:bg-gray-200/50"
                }`}
              >
                {nav.icon}
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Nav;
