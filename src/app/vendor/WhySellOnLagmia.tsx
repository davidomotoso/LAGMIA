import Image from "next/image";
import React from "react";
import SellOnLagmia from "@/../public/why-sell-on-lagmia.jpg";

const WhySellOnLagmia = () => {
  return (
    <section className="bg-white rounded-sm p-3 space-y-6">
      <h4 className="font-medium text-center text-lg">Why sell on Lagmia?</h4>
      <div className="flex items-center justify-between">
        <ul className="list-disc space-y-3 pl-15">
          <li>Reach Thousands of Ready Buyers</li>
          <li>Boost Your Product Visibility</li>
          <li>Seamless Order Fulfillment</li>
          <li>Increase Your Profits</li>
          <li>Trusted & Secure Platform</li>
          <li>Dedicated Seller Support</li>
        </ul>
        <Image
          className="h-68 w-6/10 object-[0-11rem] object-cover rounded-sm"
          src={SellOnLagmia}
          alt="people moving packages from a truck"
        />
      </div>
    </section>
  );
};

export default WhySellOnLagmia;
