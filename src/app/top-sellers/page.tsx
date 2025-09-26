import { introProducts } from "@/components/Export";
import Link from "next/link";
import Image from "next/image";
const TopSellers = () => {
  return (
    <section className="grid grid-cols-6 bg-white gap-4 p-5 shadow-md rounded-md">
      {introProducts.map((product) => (
        <Link href={`/top-sellers/${product.id}`} className="space-y-1 text-neutral-dark" key={product.id}>
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
    </section>
  );
};

export default TopSellers;
