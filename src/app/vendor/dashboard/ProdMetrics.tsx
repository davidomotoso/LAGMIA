import SalesChart from "./SalesChart";
import { introProducts } from "@/components/Exports";
import useFunctions from "@/app/hooks/useFunctions";
import Image from "next/image";

const ProdMetrics = () => {
  const { getStockStatus } = useFunctions();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="col-span-2 space-y-4 bg-white p-6 rounded-xl">
        <h3 className="text-xl font-semibold">Products</h3>
        <table className="w-full bg-gray-100/70 shadow rounded-xl text-left overflow-clip">
          <thead>
            <tr className="border-b border-gray-400">
              <th className="py-4 px-6">Product</th>
              <th className="py-4 px-6">Name</th>
              <th className="py-4 px-6">Price</th>
              <th className="py-4 px-6">Stock Status</th>
            </tr>
          </thead>

          <tbody>
            {introProducts.slice(0, 4).map((item, i) => {
              const stockInfo = getStockStatus(item.qty, item.qtySold);
              return (
                <tr key={i} className="not-last:border-b border-gray-400">
                  <td className="py-3 px-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="size-12 rounded-sm object-cover"
                    />
                  </td>
                  <td className="py-3 px-6 max-w-xs truncate">{item.name}</td>
                  <td className="py-3 px-6">{item.price}</td>
                  <td className={`py-3 px-6 font-medium ${stockInfo.color}`}>
                    {stockInfo.text}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="bg-white shadow rounded-xl py-6 px-4">
        <h3 className="text-xl font-semibold mb-4">Analytics</h3>
          <SalesChart />
      </div>
    </div>
  );
};

export default ProdMetrics;
