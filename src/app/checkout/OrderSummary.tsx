"use client"
import { useCartStore } from "@/Utils/storeCart";
import useFunctions from "@/Utils/useFunctions";

const OrderSummary = () => {
  const {calTotalPrice,calPriceAndDeliveryFee} = useFunctions()
  const cart = useCartStore((state)=>state.cart)
  return (
    <section className="w-3/12 bg-white rounded-sm text-neutral-dark text-sm">
      <h6 className="font-medium uppercase px-2 py-3 border-b border-gray-200">
        Order summary
      </h6>
      <ul className="border-b border-gray-200 p-2 space-y-3">
        <li>
          Item's total ({cart.length})<span className="font-medium float-right">{calTotalPrice()}</span>
        </li>
        <li>
          Delivery fees<span className="font-medium float-right">₦{500*cart.length}</span>
        </li>
      </ul>
      <div className="flex items-center justify-between p-2 font-medium border-b border-gray-200">
        <p>Total</p>
        <p className="text-lg float-left">{calPriceAndDeliveryFee(calTotalPrice(),500)}</p>
      </div>
      <div className="p-2">
        <button
          className="w-full bg-primary/85 hover:bg-primary font-medium text-white p-3 rounded-sm cursor-pointer disabled:bg-gray-400"
          title="confirm order"
          type="submit"
          disabled
        >
          Confirm order
        </button>
      </div>
    </section>
  );
};

export default OrderSummary;
