import Navbar from "@/components/Navbar";
import CustomerReviews from "../../[id]/CustomerReviews";
import { introProducts } from "@/components/Exports";

const page = async ({ params }: { params: { id: number } }) => {
  const { id } = await params;
  const product = introProducts[id];
  return (
    <>
      <Navbar />
      <CustomerReviews
        reviewProps={{
          id: params.id,
          visibleIcon: true,
          limit: product.rating.length,
          rating: product.rating,
          reviews: product.customerReviews,
        }}
      />
    </>
  );
};

export default page;
