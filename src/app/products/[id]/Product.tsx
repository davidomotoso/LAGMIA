import { introProducts, sellers } from "@/components/Exports";
import Image from "next/image";
import ProductDetails from "./ProductDetails";
import Specifications from "./Specifications";
import CartButtons from "@/components/CartButtons";
import CustomerReviews from "./CustomerReviews";
import RatingStars from "@/components/RatingStars";
import useFunctions from "@/app/hooks/useFunctions";

const Product = async ({ param }: { param: { id: number } }) => {
  const { id } = await param;
  const { handleRating, getStockStatus } = useFunctions();
  const product = introProducts[id];
  const seller = sellers[id];

  return (
    <section className="w-8/11">
      <section className="bg-white p-4 rounded-sm flex items-start justify-between">
        <Image
          className="rounded-md object-cover w-4/10 h-80"
          src={product.image}
          alt={product.name}
        />
        <div className="w-4/7 grid place-items-start gap-y-3 text-neutral-dark">
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
          <div className="space-y-2 w-full pb-3 border-b border-b-gray-200">
            <h3 className="text-2xl font-bold">{product.price}</h3>
            <p className={`${getStockStatus(product.qty,product.qtySold).color} text-sm`}>{getStockStatus(product.qty,product.qtySold).text}</p>
            <p className="text-sm">+ shipping calculated at checkout</p>
            <div className="flex items-center gap-x-2">
              <div className="flex gap-x-1 items-center">
                <RatingStars rating={handleRating(product.rating)} />
              </div>
              <p className="text-primary">
                ({product.rating.length} verified rating)
              </p>
            </div>
            <CartButtons
              product={{
                name: product.name,
                image: product.image,
                id: product.id,
                price: product.price,
                quantity: 1,
                seller: seller.name,
              }}
              icon={true}
              addClass={"p-3"}
              counterClass={""}
            />
          </div>
          <p className="text-xs text-primary cursor-pointer hover:underline">
            Report incorrect product information
          </p>
        </div>
      </section>
      <ProductDetails product={product} />
      <Specifications product={product} />
      <CustomerReviews
        reviewProps={{
          id: product.id,
          visibleIcon: false,
          limit: 3,
          rating: product.rating,
          reviews: product.customerReviews,
        }}
      />
    </section>
  );
};

export default Product;
