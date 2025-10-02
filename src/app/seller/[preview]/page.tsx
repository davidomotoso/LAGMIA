import Preference from "@/components/Preference";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import SellerProducts from "./SellerProducts";
import {sellers} from "@/components/Exports";

const page = async ({ params }: { params: { preview: string } }) => {
  const { preview } = await params;
  return (
    <section className="text-neutral-dark">
      <div className="bg-white rounded-sm shadow-md">
        {sellers.filter(
          (seller) => seller.name.toLowerCase().split(" ").join("-") === preview
        ).map((seller,index) => (
          <div key={index}>
            <div className="p-3 border-b border-gray-200 space-y-2">
          <div className="flex items-center justify-between font-medium">
            <h3 className="text-xl">{seller.name}</h3>
            <Link
              className="text-sm flex items-center gap-x-1 text-primary/85"
              href={"/"}
            >
              See Profile <FaChevronRight />
            </Link>
          </div>
          <p>
            <span className="font-medium">{seller.score}%</span> Seller Score
          </p>
        </div>
        <div className="flex items-center justify-end gap-x-4 p-3">
          <p>
            <span className="font-medium">{seller.followers} </span>
            Followers
          </p>
          <button
            className="text-sm bg-primary text-white font-medium py-2 px-4 rounded-sm shadow-md hover:bg-primary/90 duration-150 cursor-pointer"
            type="submit"
            title="follow"
          >
            Follow
          </button>
        </div>
          </div>
        ))}
      </div>
      <section className="mt-4 flex items-start justify-between">
        <Preference/>
        <SellerProducts/>
        </section>
    </section>
  );
};

export default page;
