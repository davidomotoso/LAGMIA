import { introProducts, categories } from "@/components/Export";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section>
      <section className="my-6 shadow-md">
        <div className="bg-secondary px-5 py-3 rounded-t-sm flex items-center justify-between">
          <h3 className="text-neutral-dark text-xl font-semibold">
            Top Sellers
          </h3>
          <Link
            className="text-sm font-medium duration-150 hover:text-primary/70"
            href="/top-sellers"
          >
            See all <FaChevronRight className="inline" />
          </Link>
        </div>
        <div className="grid grid-cols-6 bg-white gap-4 p-5 pb-3 shadow-md rounded-b-sm">
          {introProducts.map((product) => (
            <Link
              href={`/top-sellers/${product.id}`}
              className="space-y-1 text-neutral-dark w-46 hover:scale-[1.02] hover:shadow-md pb-2 rounded-md duration-150"
              key={product.id}
            >
              <Image
                className="rounded-md h-46 object-cover object-top"
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
      <section className="shadow-md">
        <div className="bg-secondary px-5 py-3 rounded-t-sm">
          <h3 className="text-neutral-dark text-xl text-center font-semibold">
            Featured Products
          </h3>
        </div>
        <div className="grid grid-cols-6 bg-white gap-4 p-5 pb-3 shadow-md rounded-b-sm">
          {categories.map((category) => (
            <Link
              href=""
              className="space-y-1 text-neutral-dark w-46 hover:scale-[1.02] hover:shadow-md pb-2 rounded-md duration-150"
              key={category.id}
            >
              <Image
                className="rounded-md h-46 object-cover"
                src={category.image}
                alt={category.name}
                placeholder="blur"
              />
              <h2 className="text-center p-2">{category.name}</h2>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Hero;
