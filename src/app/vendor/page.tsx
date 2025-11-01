import Navbar from "@/components/Navbar";
import banner from "@/../public/vendor_banner.png";
import Image from "next/image";
import WhySellOnLagmia from "./WhySellOnLagmia";
import HowItWorks from "./HowItWorks";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="text-neutral-dark space-y-4">
        <section className="bg-white p-2 rounded-sm group">
          <Image
            className="rounded-sm group-hover:scale-[1.002] duration-300 h-80 object-cover"
            src={banner}
            alt="vendor banner"
          />
        </section>
        <WhySellOnLagmia/>
        <HowItWorks/>
      </section>
    </>
  );
};

export default page;
