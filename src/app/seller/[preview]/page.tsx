import Preference from "@/components/Preference";
import SellerProducts from "./SellerProducts";
import { sellers } from "@/components/Exports";
import SellerPreview from "@/components/SellerPreview";

const page = async ({ params }: { params: { preview: string } }) => {
  const { preview } = await params;
  return (
    <section className="text-neutral-dark">
        {sellers
          .filter(
            (seller) =>
              seller.name.toLowerCase().split(" ").join("-") === preview,
          )
          .map((seller, index) => (
            <div key={index}>
              <SellerPreview seller={seller} addClass={"bg-white shadow-md"} visible={true} />
              <div className="mt-4 flex items-start justify-between">
                <Preference seller={seller} />
                <SellerProducts seller={seller} />
              </div>
            </div>
          ))}
    </section>
  );
};

export default page;
