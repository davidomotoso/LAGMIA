import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import ProductForm from "./ProductForm";

const page = () => {
  return (
    <section className="bg-black/30 backdrop-blur-lg w-full absolute top-0 left-0 grid place-items-center py-10">
      <section className="w-5xl mx-auto bg-white rounded-lg shadow-lg text-neutral-dark">
        <h2 className="text-2xl font-bold p-5 border-b border-gray-200 flex items-center gap-x-3">
          <Link className="hover:pr-1 duration-150" href={"/vendor/products"}>
            <FiArrowLeft />
          </Link>
          Add New Product
        </h2>
        <ProductForm/>
      </section>
    </section>
  );
};

export default page;
