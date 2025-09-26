import { introProducts } from "@/components/Export";
import Image from "next/image";
import { FaCartPlus, FaStar } from "react-icons/fa6";

const Product = ({ params }: { params: { id: number } }) => {
  const product = introProducts[params.id];
  return (
    <section className="bg-white p-5 rounded-md flex items-start justify-between">
      <Image
        className="rounded-md object-cover w-5/10"
        src={product.image}
        alt={product.name}
      />
      <div className="w-5/11 grid place-items-start gap-y-3 text-neutral-dark">
        <div className="w-full space-y-3 pb-3 border-b border-b-gray-200">
          <h2 className="text-4xl font-bold">{product.name}</h2>
          <p>
            <span className="font-medium">Seller: </span>Wgadet
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magni
          expedita sunt ab animi doloribus dolore, repellat deserunt molestias
          in dolorum maxime possimus officiis nisi a perspiciatis fugit placeat
          sequi.
        </p>
        <div className="space-y-2 border-b w-full pb-3 border-b-gray-200">
          <h4 className="text-xl font-medium">{product.price}</h4>
          <p className="text-gray-600 text-sm">In stock</p>
          <div className="flex items-center gap-x-2">
            <div className="flex gap-x-1 items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-gray-400/70" />
              ))}
            </div>
            <p className="text-primary">(32 verified rating)</p>
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 rounded-lg cursor-pointer flex items-center w-full mt-4 font-medium hover:bg-primary/90 duration-200"
          >
            <FaCartPlus />
            <span className="mx-auto">Add to cart</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
