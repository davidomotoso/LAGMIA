import { introProducts } from "@/components/Exports";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import CartButtons from "@/components/CartButtons";

const SellerProducts = ({ seller }: { seller: { name: string } }) => {
  return (
    <section className="bg-white rounded-sm w-8/11 mb-3">
      <div className="flex items-center gap-x-3 p-3 border-b border-gray-200">
        <h3 className="text-xl font-medium">{seller.name}</h3>
        <p className="text-sm">({89} products found)</p>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4 place-items-center py-2">
        {introProducts.map((product, index) => (
          <div
            key={index}
            className="space-y-1 cursor-pointer  text-neutral-dark w-46 h-[22rem] hover:scale-[1.02] hover:shadow-md p-2 rounded-md duration-150 group"
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
            <CartButtons
              product={{
                name: product.name,
                image: product.image,
                id: product.id,
                price: product.price,
                quantity: 1,
                seller: seller.name,
              }}
              icon={false}
              addClass={"py-2 text-sm relative -bottom-7 hidden group-hover:block"}
              counterClass={"relative -bottom-10"}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellerProducts;
