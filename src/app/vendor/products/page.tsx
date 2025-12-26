import Navbar from "../Navbar";
import AddProducts from "./AddProducts";
import Goods from "./Goods";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-start justify-between mb-4 text-neutral-dark">
        <Goods/>
        <AddProducts/>
      </section>
    </>
  );
};
export default page;
