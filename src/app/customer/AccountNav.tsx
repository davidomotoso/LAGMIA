"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AccountNav = () => {
  const pathname = usePathname();

  return (
    <aside className="bg-white w-4/13 rounded-sm overflow-hidden">
      <ul>
        <li>
          <Link
            href={"/customer/account"}
            className={`block p-3 pl-5 duration-100 border-l-4 ${
              pathname === "/customer/account"
                ? "font-medium bg-gray-300 border-blue-500"
                : "hover:bg-gray-200/50 border-transparent hover:font-medium"
            }`}
          >
            Edit Details
          </Link>
        </li>

        <li>
          <Link
            href="/customer/delete-account"
            className={`block p-3 pl-5 duration-100 border-l-4 text-red-600 ${
              pathname === "/customer/delete-account"
                ? "font-medium bg-gray-300 border-red-500"
                : "hover:bg-gray-200/50 hover:font-medium border-transparent"
            }`}
          >
            Delete Account
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AccountNav;
