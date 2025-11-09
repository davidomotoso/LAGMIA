import { introProducts, categories } from "@/components/Exports";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <section className="my-6 shadow-md text-neutral-dark">
        <div className="bg-secondary px-5 py-3 rounded-t-sm">
          <h3 className="text-xl text-center font-semibold">
            Featured Products
          </h3>
        </div>
        <div className="grid grid-cols-6 bg-white gap-4 p-5 pb-3 shadow-md rounded-b-sm">
          {categories.map((category) => (
            <Link
              href={`${category.link}`}
              className="space-y-1 w-46 hover:scale-[1.02] hover:shadow-md pb-2 rounded-md duration-150"
              key={category.id}
            >
              <Image
                className="rounded-md size-46 object-cover"
                src={category.image}
                alt={category.name}
                placeholder="blur"
              />
              <h2 className="text-center p-2">{category.name}</h2>
            </Link>
          ))}
        </div>
      </section>
      <section className="shadow-md text-neutral-dark mb-5">
        <div className="bg-secondary px-5 py-3 rounded-t-sm flex items-center justify-between">
          <h3 className="text-xl font-semibold">Products</h3>
          <Link
            className="text-sm font-medium duration-150 hover:text-primary/70 flex items-center gap-x-1"
            href="/products"
          >
            See all <FaChevronRight />
          </Link>
        </div>
        <div className="grid grid-cols-6 bg-white gap-4 p-5 pb-3 shadow-md rounded-b-sm">
          {introProducts.map((product) => (
            <Link
              href={`/products/${product.id}`}
              className="space-y-1 w-46 hover:scale-[1.02] hover:shadow-md pb-2 rounded-md duration-150"
              key={product.id}
            >
              <Image
                className="rounded-md size-46 object-cover object-top"
                src={product.image}
                alt={product.name}
                placeholder="blur"
              />
              <div className=" p-2">
                <h2 className="text-ellipsis whitespace-nowrap overflow-clip">
                  {product.name}
                </h2>
                <p className="font-medium">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
