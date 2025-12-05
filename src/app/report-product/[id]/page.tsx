import Report from "./Report";

const page = async({ params }: { params: { id: number } }) => {
  const {id}=params
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-fit bg-white h-fit shadow-lg p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Report This Product</h2>
        <p className="text-gray-600 mb-6">
          Help us maintain a safe marketplace by reporting suspicious or harmful
          products.
        </p>
        <Report id={id} />
      </div>
    </div>
  );
};
export default page;
