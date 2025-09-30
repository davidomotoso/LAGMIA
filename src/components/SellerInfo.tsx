import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { sellers } from "@/components/Exports";
import useFunctions from "@/Utils/useFunctions";

const SellerInfo = async ({ params }: { params: { id: number } }) => {
  const { getAppraisal } = useFunctions();
  const { id } = await params;
  return (
    <section className="bg-white rounded-sm shadow-md sticky top-2">
      <Link
        href=""
        className="flex items-center justify-between font-medium border-b border-gray-200 p-2"
      >
        <h5 className="uppercase">Seller Information</h5>
        <FaChevronRight />
      </Link>
      {sellers
        .filter((seller) => seller.id == id)
        .map((seller, index) => (
          <div key={index} className="space-y-2">
            <div className="p-2 space-y-2 border-b border-gray-200">
              <h5 className="font-semibold">{seller.name}</h5>
              <div className="flex items-center justify-between">
                <div className="text-xs">
                  <p>
                    <span className="font-medium">{seller.score}% </span>Seller
                    Score
                  </p>
                  <p>
                    <span className="font-medium">{seller.followers} </span>
                    Followers
                  </p>
                </div>
                <button
                  className="bg-primary text-white font-medium py-2 px-4 rounded-sm shadow-md hover:bg-primary/90 duration-150 cursor-pointer"
                  type="submit"
                  title="follow"
                >
                  Follow
                </button>
              </div>
            </div>
            <div className="p-2 space-y-2">
              <h5 className="font-semibold">Seller Performance</h5>
              <div className="flex items-center gap-x-1 text-sm">
                <div
                  className={`${
                    getAppraisal(seller.sellPerformance[0].shipingSpeed??0).color
                  } rounded-full p-1 text-white`}
                >
                  {getAppraisal(
                    seller.sellPerformance[0].shipingSpeed ?? 0
                  ).icon}
                </div>
                <p>
                  Shipping speed:{" "}
                  <span className="font-medium">
                    {getAppraisal(seller.sellPerformance[0].shipingSpeed??0).grade}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-x-1 text-sm">
                <div
                  className={`${
                    getAppraisal(seller.sellPerformance[1].qualityScore??0).color
                  } rounded-full p-1 text-white`}
                >
                  {getAppraisal(seller.sellPerformance[1].qualityScore??0).icon}
                </div>
                <p>
                  Quality Score:{" "}
                  <span className="font-medium">
                    {getAppraisal(seller.sellPerformance[1].qualityScore??0).grade}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-x-1 text-sm">
                <div
                  className={`${
                    getAppraisal(seller.sellPerformance[2].customerRating??0).color
                  } rounded-full p-1 text-white`}
                >
                  {getAppraisal(seller.sellPerformance[2].customerRating??0).icon}
                </div>
                <p>
                  Customer Rating:{" "}
                  <span className="font-medium">
                    {getAppraisal(seller.sellPerformance[2].customerRating??0).grade}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default SellerInfo;
