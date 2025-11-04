import { BsArrowCounterclockwise, BsHouse, BsTruck } from "react-icons/bs";
import SellerInfo from "./SellerInfo";
import useFunctions from "@/app/hooks/useFunctions";
import Location from "./Location";

const DeliveryReturns = ({ params }: { params: { id: number } }) => {
  const { getDeliveryDate } = useFunctions();
  return (
    <aside className="w-3/12 text-sm text-neutral-dark space-y-3">
      <section className="bg-white rounded-sm shadow-sm">
        <h5 className="font-medium p-2 border-b border-gray-200">
          DELIVERY & RETURNS
        </h5>
        <p className="p-2 border-b border-gray-200 text-xs">
          The BEST products, delivered faster. Now PAY on DELIVERY, Cash or Bank
          Transfer Anywhere, Zero Stress, Zero Wahala!
        </p>
        <div className="space-y-3 p-2">
          <h4 className="text-lg font-medium">Choose your location</h4>
         <Location addClass="p-4" labelClass="" visible={false} />
        </div>
        <div className="border-b border-gray-200 space-y-4 p-2 mt-2">
          <div className="flex items-start gap-x-3">
            <div className="p-1 border border-gray-300 text-2xl rounded-sm">
              <BsHouse />
            </div>
            <div className="space-y-1">
              <h5 className="text-base font-medium"> Pickup</h5>
              <p className="text-gray-600 text-xs">
                Ready for pickup between <strong>{getDeliveryDate(3)}</strong>{" "}
                and
                <strong> {getDeliveryDate(6)}</strong>. Free within
                <strong> UNILAG & CMUL</strong>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-3">
            <div className="p-1 border border-gray-300 text-2xl rounded-sm">
              <BsTruck />
            </div>
            <div className="space-y-1">
              <h5 className="text-base font-medium"> Door Delivery</h5>
              <p className="text-xs">
                Delivery Fees <strong>₦500</strong>
              </p>
              <p className="text-gray-600 text-xs">
                Ready for delivery between <strong>{getDeliveryDate(3)}</strong>{" "}
                and
                <strong> {getDeliveryDate(5)} </strong>anywhere within
                <strong> UNILAG & CMUL</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-x-3 p-2 mt-2">
          <div className="p-1 border border-gray-300 text-2xl rounded-sm">
            <BsArrowCounterclockwise />
          </div>
          <div className="space-y-1">
            <h5 className="text-base font-medium"> Returns</h5>
            <p className="text-gray-600 text-xs">
              Not satisfied? Don't worry, we offer a 7-day return policy on all
              our products.
            </p>
          </div>
        </div>
      </section>
      <SellerInfo params={params} />
    </aside>
  );
};

export default DeliveryReturns;
