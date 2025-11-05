import Link from "next/link";
import { FaChevronRight, FaStar } from "react-icons/fa6";

const CustomerReviews = () => {
  return (
    <section className="bg-white rounded-sm mt-4 text-neutral-dark space-y-3">
      <div className="p-3 rounded-t-sm flex items-center justify-between border-b border-gray-200">
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        <Link
          className="text-sm font-medium duration-150 hover:text-primary/70 flex items-center gap-x-1"
          href={""}
        >
          See all <FaChevronRight />
        </Link>
      </div>
      <section className="flex items-start justify-between p-3">
        <div className="w-4/15 space-y-5">
          <h5 className="font-medium uppercase">Customer ratings</h5>
          <div className="bg-neutral-200/70 rounded-sm space-y-4 grid place-content-center place-items-center h-40">
            <h1 className="text-4xl font-medium text-secondary">4/5</h1>
            <div className="flex gap-x-1 items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-secondary" />
              ))}
            </div>
            <p>50 verified ratings</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-x-5">
              <div className="flex items-center gap-x-2.5 text-sm">
                <p className="font-medium">5</p>
                <FaStar className="text-secondary" />
                <p className="text-gray-500">(11)</p>
              </div>
              <meter className="w-full" value="60" max={100}></meter>
            </div>
            <div className="flex items-center gap-x-5">
              <div className="flex items-center gap-x-2.5 text-sm">
                <p className="font-medium">5</p>
                <FaStar className="text-secondary" />
                <p className="text-gray-500">(11)</p>
              </div>
              <meter className="w-full" value="60" max={100}></meter>
            </div>
            <div className="flex items-center gap-x-5">
              <div className="flex items-center gap-x-2.5 text-sm">
                <p className="font-medium">5</p>
                <FaStar className="text-secondary" />
                <p className="text-gray-500">(11)</p>
              </div>
              <meter className="w-full" value="60" max={100}></meter>
            </div>
          </div>
        </div>
        <div className="w-7/10 space-y-5">
          <h5 className="font-medium uppercase">
            Comments from purchases (10)
          </h5>
          <div className="space-y-4 border-b border-gray-200 pb-4">
            <div className="flex gap-x-1 items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-secondary text-lg" />
              ))}
            </div>
            <h5 className="font-medium">70l double door fridge</h5>
            <p className="text-sm">
              Too small Assuming I know it's this size should have go for 85l or
              higher one
            </p>
            <p className="text-sm text-gray-500">
              03-11-2025 by CHIZOBA ANUNOBI
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CustomerReviews;
