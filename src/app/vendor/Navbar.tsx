import Link from "next/link";
import logo from "@/../public/LAGMIA.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-white px-6 py-2 rounded-md my-4 flex justify-between items-center">
      <Link href="/vendor">
        <Image
          src={logo}
          alt="logo for unitrade lagos"
          width={150}
          priority={true}
        />
      </Link>
      <nav className="w-full flex items-center justify-end">
        <ul className="flex items-center gap-8 font-medium">
          <li>
            <Link href="#" className="hover:text-secondary duration-200">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-secondary duration-200">
              Products
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-secondary duration-200">
              Orders
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-secondary duration-200">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
