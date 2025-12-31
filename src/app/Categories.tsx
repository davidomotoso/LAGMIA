import Link from "next/link";
import ad from "@/../public/ad.gif";
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
    <aside className="w-3/12 flex flex-col justify-between">
      <ul className="p-4 grid items-start gap-y-5 text-neutral-dark bg-white rounded-sm shadow-md">
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href={"/category/phones-tablets"}
          >
            <FaTabletScreenButton /> Phones & Tablets
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href={"/category/computing"}
          >
            <FaDesktop /> Computing
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href={"/category/health-beauty"}
          >
            <FaNotesMedical /> Health & Beauty
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href={"/category/electronics"}
          >
            <FaPlugCircleBolt /> Electronics
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href={"/category/fashion"}
          >
            <FaVest /> Fashion
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href={"/category/home-appliances"}
          >
            <FaFan /> Home Appliances
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href={"/category/books"}
          >
            <FaBook /> Books
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center gap-x-2 hover:text-secondary duration-200"
            href={"/category"}
          >
            <BsThreeDots /> More
          </Link>
        </li>
      </ul>
      <Link href={"vendor/auth"}>
        <Image src={ad} alt="ad" className="rounded-sm" />
      </Link>
    </aside>
  );
};

export default Catergories;
