"use client"
import Link from "next/link";
import logo from "@/../public/LAGMIA-vendor.png";
import Image from "next/image";
import {
  MdDashboard,
  MdInventory,
  MdShoppingCart,
  MdSettings,
} from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white px-6 py-2 rounded-md my-4 flex justify-between items-center">
      <Link href="/vendor">
        <Image
          src={logo}
          alt="logo for lagmia vendor"
          width={150}
          priority={true}
        />
      </Link>
      <nav className="w-full flex items-center justify-end">
        <ul className="flex items-center gap-8 font-medium">
          <li>
            <Link
              href="/vendor/dashboard"
              className={`flex items-center gap-2 hover:text-secondary duration-200 ${
                pathname === "/vendor/dashboard" ? "text-secondary" : "text-gray-600"
              }`}
            >
              <MdDashboard />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/vendor/products"
              className={`flex items-center gap-2 hover:text-secondary duration-200 ${
                pathname === "/vendor/products" ? "text-secondary" : "text-gray-600"
              }`}
            >
              <MdInventory />
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/vendor/orders"
              className={`flex items-center gap-2 hover:text-secondary duration-200 ${
                pathname === "/vendor/orders" ? "text-secondary" : "text-gray-600"
              }`}
            >
              <MdShoppingCart />
              Orders
            </Link>
          </li>
          <li>
            <Link
              href="/vendor/settings"
              className={`flex items-center gap-2 hover:text-secondary duration-200 ${
                pathname === "/vendor/settings" ? "text-secondary" : "text-gray-600"
              }`}
            >
              <MdSettings />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
