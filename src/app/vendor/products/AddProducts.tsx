import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import vendorAd from "@/../public/vendor-ad.gif";
import Link from "next/link";

const AddProducts = () => {
  return (
    <section className="w-3/12 space-y-4 sticky top-2.5">
      <div className="bg-white rounded-sm p-4 space-y-3.5">
        <h2 className="text-2xl font-semibold">Hello👋</h2>
        <div className="text-sm">
          <h4 className="text-lg font-medium">Ready to Grow Your Store?</h4>
          <p>
            Add a new product now and start reaching buyers across campus today!
            Let's get your items selling!
          </p>
        </div>
        <Link
          className="flex items-center justify-center gap-x-2 p-2.5 mt-6 w-full font-medium rounded-sm bg-secondary hover:bg-secondary/80 cursor-pointer text-white duration-200 transition"
          href={"/vendor/products/add-product"}
        >
          <FaPlus />
          Add Product
        </Link>
      </div>
      <Image
        src={vendorAd}
        alt="Vendor Advertisement"
        className="rounded-sm"
      />
    </section>
  );
};

export default AddProducts;
