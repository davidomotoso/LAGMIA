import SalesChart from "./SalesChart";

const ProdMetrics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="col-span-2 space-y-4 bg-white p-6 rounded-xl">
        <h3 className="text-xl font-semibold">Products</h3>
        <table className="w-full bg-gray-100/70 shadow rounded-xl text-left overflow-clip">
          <thead>
            <tr className="border-b">
              <th className="py-4 px-6">Product</th>
              <th className="py-4 px-6">Price</th>
              <th className="py-4 px-6">Stock Status</th>
            </tr>
          </thead>

          <tbody>
            {[
              {
                title: "iPhone 12 Pro",
                price: "₦450,000",
                stock: "In Stock",
                color: "text-green-600",
              },
              {
                title: 'MacBook Pro 16"',
                price: "₦700,000",
                stock: "Out of Stock",
                color: "text-red-600",
              },
              {
                title: "Wooden Study Table",
                price: "₦20,000",
                stock: "In Stock",
                color: "text-green-600",
              },
              {
                title: "Moleskine Notebook",
                price: "₦5,000",
                stock: "In Stock",
                color: "text-green-600",
              },
            ].map((item, i) => (
              <tr key={i} className="not-last:border-b">
                <td className="py-4 px-6">{item.title}</td>
                <td className="py-4 px-6">{item.price}</td>
                <td className={`py-4 px-6 font-medium ${item.color}`}>
                  {item.stock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ANALYTICS */}
      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4">Analytics</h3>

       <div className="bg-gray-100/70 p-4 shadow rounded-lg">
        <SalesChart />
      </div>
      </div>
    </div>
  );
};

export default ProdMetrics;
