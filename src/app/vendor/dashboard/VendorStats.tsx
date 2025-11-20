const vendorStats = () => {
  return (
    <section className="bg-white rounded-xl p-6 space-y-10">
      <h2 className="text-3xl font-bold">Welcome back, David 👋</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-100/70 space-y-3 shadow rounded-xl p-6">
          <p className="text-neutral-dark font-semibold text-2xl">25</p>
          <p className="text-sm text-gray-600">Products Listed</p>
        </div>

        <div className="bg-gray-100/70 space-y-3 shadow rounded-xl p-6">
          <p className="text-neutral-dark font-semibold text-2xl">₦120,000</p>
          <p className="text-sm text-gray-600">Total Sales</p>
        </div>

        <div className="bg-gray-100/70 space-y-3 shadow rounded-xl p-6">
          <p className="text-neutral-dark font-semibold text-2xl">5</p>
          <p className="text-sm text-gray-600">Orders in Progress</p>
        </div>

        <div className="bg-gray-100/70 space-y-3 shadow rounded-xl p-6">
          <p className="text-neutral-dark font-semibold text-2xl">4.8</p>
          <p className="text-sm text-gray-600">Average Rating</p>
        </div>
      </div>
    </section>
  );
};

export default vendorStats;
