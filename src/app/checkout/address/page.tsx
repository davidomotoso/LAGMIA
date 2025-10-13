import EditAddress from "@/components/EditAddress";
import Navbar from "@/components/Navbar";
import OrderSummary from "../OrderSummary";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-start justify-between">
        <EditAddress back={"/checkout"} />
        <OrderSummary/>
      </section>
    </>
  );
};

export default page;
