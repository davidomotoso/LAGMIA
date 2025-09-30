import DeliveryReturns from "@/components/DeliveryReturns";
import Product from "@/components/Product";

const Page = ({ params }: { params: { id: number } }) => {
  return (
    <section className="flex items-start justify-between">
      <Product param={params} />
      <DeliveryReturns params={params}/>
    </section>
  );
};

export default Page;
