import { introProducts, categories } from "@/components/Export";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <section className="my-6">
        <div className="bg-secondary px-5 py-3 rounded-t-md">
          <h3 className="text-neutral-dark text-xl font-semibold">
            Top Sellers
          </h3>
        </div>
        <div className="grid grid-cols-6 bg-white gap-4 p-5 shadow-md rounded-b-md">
          {introProducts.map((product) => (
            <Link
              href={`/top-sellers/${product.id}`}
              className="space-y-1 text-neutral-dark"
              key={product.id}
            >
              <Image
                className="rounded-md h-52 object-cover object-top"
                src={product.image}
                alt={product.name}
                placeholder="blur"
              />
              <h2 className="text-ellipsis whitespace-nowrap overflow-clip">
                {product.name}
              </h2>
              <p className="font-medium">{product.price}</p>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <div className="bg-secondary px-5 py-3 rounded-t-md">
          <h3 className="text-neutral-dark text-xl font-semibold">
            Featured Products
          </h3>
        </div>
        <div className="grid grid-cols-6 bg-white gap-4 p-5 shadow-md rounded-b-md">
          {categories.map((category) => (
            <Link
              href=""
              className="space-y-1 text-neutral-dark"
              key={category.id}
            >
              <Image
                className="rounded-md h-52 object-cover"
                src={category.image}
                alt={category.name}
                placeholder="blur"
              />
              <h2 className="text-ellipsis whitespace-nowrap overflow-clip">
                {category.name}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Hero;
