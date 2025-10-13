import Link from "next/link";
import ad from "../../public/unitrade-lagos-ad.jpg";
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
    <aside className="w-3/12 flex flex-col justify-between overflow-hidden">
      <ul className="p-4 grid items-start gap-y-5 text-neutral-dark bg-white rounded-sm shadow-md">
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
      <Image src={ad} alt="ad" className="h-5/18 rounded-sm" />
    </aside>
  );
};

export default Catergories;
