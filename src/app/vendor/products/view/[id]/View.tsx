import { introProducts, sellers } from "@/components/Exports";
import Image from "next/image";
// import ProductDetails from "./ProductDetails";
import useFunctions from "@/app/hooks/useFunctions";
import RatingStars from "@/components/RatingStars";
import Specifications from "@/components/Specifications";
import ProductDetails from "@/components/ProductDetails";

const View = async ({ param }: { param: { id: number } }) => {
  const { id } = await param;
  const { getStockStatus, handleRating } = useFunctions();
  const product = introProducts[id];
  const stockInfo = getStockStatus(product.qty, product.qtySold);

  return (
    <section className="w-8/11 space-y-4">
      <section className="bg-white p-4 rounded-sm flex items-start justify-between">
        <Image
          className="rounded-md object-cover size-60"
          src={product.image}
          alt={product.name}
        />
        <div className="w-9/13 grid place-items-start gap-y-3 text-neutral-dark">
          <div className="w-full space-y-3 pb-3 border-b border-b-gray-200">
            <h2 className="text-3xl font-semibold">{product.name}</h2>
            {product.specifications
              .filter((spec) => spec.label === "Brand")
              .map((spec, index) => (
                <p key={index}>
                  <strong>Brand: </strong>
                  <span className="text-primary">{spec.value}</span>
                </p>
              ))}
          </div>
          <div className="space-y-2 w-full pb-3">
            <h3 className="text-2xl font-bold">{product.price}</h3>
            <p className={`${stockInfo.color} text-sm`}>{stockInfo.text}</p>
            <div className="flex items-center gap-x-2">
              <div className="flex gap-x-1 items-center">
                <RatingStars rating={handleRating(product.rating)} />
              </div>
              <p className="text-primary">
                ({product.rating.length} verified rating)
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProductDetails product={product} />
      <Specifications product={product} />
    </section>
  );
};

export default View;
