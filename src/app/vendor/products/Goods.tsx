import useFunctions from "@/app/hooks/useFunctions";
import { introProducts } from "@/components/Exports";
import Image from "next/image";
import { BsPenFill } from "react-icons/bs";

const Goods = () => {
  const { getStockStatus } = useFunctions();
  return (
    <section className="bg-white/60 w-8/11 rounded-sm p-4 space-y-3">
      {introProducts.map((product, index) => {
        const stockInfo = getStockStatus(product.qty, product.qtySold);
        return (
          <div className="bg-white rounded-sm p-3" key={index}>
            <div className="w-full flex items-start justify-between">
              <Image
                className="rounded-sm size-41 object-cover"
                src={product.image}
                alt={product.name}
              />
              <div className="space-y-2 w-11/14">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="line-clamp-3 text-sm text-gray-600">
                  {product.desc}
                </p>
                <p className={`${stockInfo.color} text-sm`}>{stockInfo.text}</p>
            <div className="flex items-center justify-between">
                <h4 className="text-lg font-medium">{product.price}</h4>
              <button
                className="flex items-center gap-x-2 py-2 px-4 font-medium rounded-sm bg-primary/80 hover:bg-primary cursor-pointer text-white duration-200 transition"
                type="button"
              >
                Edit
                <BsPenFill className="text-sm" />
              </button>
            </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Goods;
