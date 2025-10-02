import Image from "next/image";
import logo from "../../public/logo.jpg";
import { FaUser } from "react-icons/fa";
import { FaCartShopping, FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="bg-white px-6 py-2 rounded-md my-3 flex justify-between items-center">
      <Link href="/">
        <Image
          src={logo}
          alt="logo for unitrade lagos"
          width={150}
          priority={true}
        />
      </Link>
      <input
        type="search"
        className="w-80 border rounded-sm border-gray-400 py-1 px-4"
        placeholder="Search for Products"
      />
      <nav>
        <ul className="flex gap-8 text-gray-600 font-medium text-lg">
          <Link href="">
            <li className="flex items-center gap-x-2 hover:text-secondary duration-200">
              <FaUser />
              Account
              <FaChevronDown />
            </li>
          </Link>
          <Link href="/cart">
            <li className="flex items-center gap-x-2 hover:text-secondary duration-200">
              <FaCartShopping />
              Cart
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
