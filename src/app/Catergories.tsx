import logo from "../../public/logo.jpg";
import Link from "next/link";
import {
  FaBook,
  FaDesktop,
  FaFan,
  FaNotesMedical,
  FaPlugCircleBolt,
  FaTabletScreenButton,
  FaVest,
} from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";

const Catergories = () => {
  return (
    <aside className="w-3/12 space-y-5 overflow-hidden shadow-md">
      <ul className="p-4 grid items-start gap-y-6 text-neutral-dark bg-white rounded-xl text-sm">
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href=""
          >
            <FaTabletScreenButton /> Phones
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href=""
          >
            <FaDesktop /> Computing
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href=""
          >
            <FaNotesMedical /> Health & Beauty
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href=""
          >
            <FaPlugCircleBolt /> Electronics
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href=""
          >
            <FaVest /> Fashion
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href=""
          >
            <FaFan /> Home Appliances
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href=""
          >
            <FaBook /> Books
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href=""
          >
            <BsThreeDots /> More
          </Link>
        </li>
      </ul>
      <div className="p-4 bg-secondary rounded-xl">
        <Image src={logo} alt="ad" className="invert" />
        <h3 className="text-2xl font-medium text-primary text-center mt-6 animate-bounce">
          Buy & Sell Now!
        </h3>
      </div>
    </aside>
  );
};

export default Catergories;
