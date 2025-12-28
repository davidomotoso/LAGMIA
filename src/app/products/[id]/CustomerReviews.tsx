import useFunctions from "@/app/hooks/useFunctions";
import RatingStars from "@/components/RatingStars";
import Link from "next/link";
import { FaChevronRight, FaStar } from "react-icons/fa6";
import { FiArrowLeft } from "react-icons/fi";

const CustomerReviews = ({
  reviewProps,
}: {
  reviewProps: {
    id: number;
    visibleIcon: boolean;
    limit: number;
    rating: number[];
    reviews: {
      username: string;
      comment: string;
      rating: number;
      date: string;
      title: string;
    }[];
  };
}) => {
  const { handleRating, handleFilterRatings } = useFunctions();
  return (
    <section className="bg-white rounded-sm text-neutral-dark space-y-3">
      <div className="p-3 rounded-t-sm flex items-center justify-between border-b border-gray-200">
        {reviewProps.visibleIcon === false ? (
          <h3 className="text-xl font-semibold">Customer Reviews</h3>
        ) : (
          <Link
            href={`/products/${reviewProps.id}`}
            className="text-xl font-semibold flex items-center gap-x-2"
          >
            <FiArrowLeft />
            Customer Reviews
          </Link>
        )}
        {reviewProps.reviews.length >= reviewProps.limit && (
          <Link
            className="text-sm font-medium duration-150 hover:text-primary/70 flex items-center gap-x-1"
            href={`reviews/${reviewProps.id}`}
          >
            See All <FaChevronRight />
          </Link>
        )}
      </div>
      <section className="flex items-start justify-between p-3">
        <div className="w-3/13 space-y-5">
          <h5 className="font-medium uppercase">Customer ratings</h5>
          <div className="bg-neutral-200/70 rounded-sm space-y-4 grid place-content-center place-items-center h-40">
            <h1 className="text-4xl text-secondary">
              <span className="font-bold">
                {handleRating(reviewProps.rating).toFixed(1)}
              </span>
              /5
            </h1>
            <RatingStars rating={handleRating(reviewProps.rating)} />
            <p>{reviewProps.rating.length} verified ratings</p>
          </div>
          <div className="space-y-1">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-start justify-between">
                <div className="flex items-center justify-between w-3/12 text-sm">
                  <p className="font-medium">{index + 1}</p>
                  <FaStar className="text-secondary" />
                  <p className="text-gray-500">
                    (
                    {
                      handleFilterRatings(reviewProps.rating, index + 1)
                        .numberOfRates
                    }
                    )
                  </p>
                </div>
                <meter
                  className="w-7/11"
                  value={
                    handleFilterRatings(reviewProps.rating, index + 1)
                      .percentageOfRates
                  }
                  max={100}
                ></meter>
              </div>
            ))}
          </div>
        </div>
        <div className="w-11/15 space-y-5">
          <h5 className="font-medium uppercase">
            Comments from purchases ({reviewProps.reviews.length})
          </h5>
          {reviewProps.reviews.map(
            (review, index) =>
              index < reviewProps.limit && (
                <div
                  key={index}
                  className="space-y-4 not-last:border-b border-gray-200 pb-4"
                >
                  <RatingStars rating={review.rating} />
                  <h5 className="font-medium">{review.title}</h5>
                  <p className="text-sm">{review.comment}</p>
                  <p className="text-sm text-gray-500">
                    {review.date} by {review.username}
                  </p>
                </div>
              ),
          )}
        </div>
      </section>
    </section>
  );
};

export default CustomerReviews;
