import Navbar from "../Navbar";
import ProdMetrics from "./ProdMetrics";
import VendorStats from "./VendorStats";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="space-y-8 mb-4">
        <VendorStats />
        <ProdMetrics />
      </section>
    </>
  );
};
export default page;
