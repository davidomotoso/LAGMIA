import { introProducts } from "@/components/Exports";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import AddCartButton from "@/components/AddCartButton";

const SellerProducts = () => {
  return (
    <section className="bg-white rounded-sm w-8/11">
      <div className="flex items-center gap-x-3 p-3 border-b border-gray-200">
        <h3 className="text-xl font-medium">Name</h3>
        <p className="text-sm">({89} products found)</p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4 place-items-center">
        {introProducts.map((product) => (
          <Link
            href={`/top-sellers/${product.id}`}
            className="space-y-1 text-neutral-dark w-46 h-[22rem] hover:scale-[1.02] hover:shadow-md p-2 rounded-md duration-150 group"
            key={product.id}
          >
            <Image
              className="rounded-md h-46 object-cover object-top"
              src={product.image}
              alt={product.name}
              placeholder="blur"
            />
            <div>
              <h2 className="text-ellipsis whitespace-nowrap overflow-clip">
                {product.name}
              </h2>
              <p className="font-medium">{product.price}</p>
            </div>
            <div className="flex gap-x-1 items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className="text-gray-400/70 hover:text-secondary"
                />
              ))}
            </div>
            <AddCartButton product={product} icon={false} addClass={"py-2 text-sm relative -bottom-7 hidden group-hover:block"}/>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SellerProducts;
