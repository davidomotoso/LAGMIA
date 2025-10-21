import CategoryOptions from "@/components/CategoryOptions";
import Navbar from "@/components/Navbar";
import Products from "../Products";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="text-neutral-dark flex items-start justify-between">
        <CategoryOptions category="Electronics"/>
        <Products category="Electronics"/>
      </section>
    </>
  );
};

export default page;
