import Navbar from "@/app/vendor/Navbar";
import View from "./View";
import AddProducts from "../../AddProducts";

const page = ({ params }: { params: { id: number } }) => {
  return (
    <section>
      <Navbar />
      <section className="flex items-start justify-between mb-4 text-neutral-dark">
        <View param={params} />
        <AddProducts />
      </section>
    </section>
  );
};

export default page;
