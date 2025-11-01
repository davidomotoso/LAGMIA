import Image from "next/image";
import RegisterInMins from "@/../public/register.jpg";
import ListProduct from "@/../public/list-product.jpg";
import BoostSales from "@/../public/boost-sales.jpg";
import Link from "next/link";

const HowItWorks = () => {
  return (
    <section className="bg-white rounded-sm p-3 space-y-6 mb-8">
      <h4 className="font-medium text-center text-lg">How it works</h4>
      <ul className="flex *:w-72 *:grid *:place-items-center *:space-y-2 items-start justify-around text-center">
        <li>
          <Image
            className="rounded-full h-48 w-48 object-cover object-bottom"
            src={RegisterInMins}
            alt=""
          />
          <div className="space-y-1">
            <h5 className="font-medium">Register in minutes</h5>
            <p>
              Fill out the registration form
              <br />
              Submit your documents for verification
            </p>
          </div>
        </li>
        <li>
          <Image
            className="rounded-full h-48 w-48 object-cover"
            src={ListProduct}
            alt=""
          />
          <div>
            <h5 className="font-medium">
              Showcase your products. Start earning.
            </h5>
            <p>Upload your top products and start selling instantly.</p>
          </div>
        </li>
        <li>
          <Image
            className="rounded-full h-48 w-48 object-cover object-top"
            src={BoostSales}
            alt=""
          />
          <div>
            <h5 className="font-medium">Boost sales with our promotions</h5>
            <p>
              Gain visibility through our campaigns and insights into
              top-selling products.
            </p>
          </div>
        </li>
      </ul>
      <div className="grid place-items-center mt-10">
        <Link href={"vendor/auth"}>
          <button
            className="bg-secondary hover:bg-secondary/85 duration-200 cursor-pointer px-6 py-3 rounded-sm font-medium uppercase text-white text-sm shadow-md"
            title="Become a vendor on lagmia"
            type="button"
          >
            Start selling
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
