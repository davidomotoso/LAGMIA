import { FaStar } from "react-icons/fa6";

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, index) => {
        const fillValue = Math.min(Math.max(rating - index, 0), 1) * 100;
        // const fillPercentage = `w-[${fillValue}%]`;

        return (
          <div key={index} className="relative">
            <FaStar className="text-lg text-gray-400/70" />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fillValue}%` }}
            >
              <FaStar className="text-lg text-secondary" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RatingStars;
