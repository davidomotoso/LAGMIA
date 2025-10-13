"use client";
import { useCartStore } from "@/Utils/storeCart";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import useFunctions from "@/Utils/useFunctions";
import { BsHouseFill } from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";
import Image from "next/image"

const EditDeliveryDetails = () => {
  const cart = useCartStore((state) => state.cart);
  const { getDeliveryDate } = useFunctions();
  return (
    <section className="w-8/11 bg-white rounded-sm shadow-sm text-neutral-dark mb-3">
      <Link
        href={"/checkout"}
        className="text-xl flex items-center gap-2 border-b border-gray-200 p-3"
      >
        <FiArrowLeft />
        <h3 className="font-semibold">Edit Delivery Details</h3>
      </Link>
      <ul className="divide-y divide-gray-200 space-y-4 p-3 *:p-3">
        <li className="group flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-x-2">
              <input
                title="pick-up"
                type="radio"
                name="preferred-delivery"
                id="pick-up"
                className="h-4.5 w-4.5 group-hover:before:bg-primary/30 before:duration-200 before:-left-1.5 before:-top-1.5 before:rounded-full before:absolute before:w-7.5 before:h-7.5 relative accent-primary"
              />
              <label className="font-medium" htmlFor="pick-up">
                Pick-up (Free)
              </label>
            </div>
            <p className="text-xs text-gray-600 pl-6.5">
              Delivery between <strong>{getDeliveryDate(3)}</strong> and{" "}
              <strong>{getDeliveryDate(6)}</strong>
            </p>
          </div>
          <BsHouseFill className="text-secondary text-2xl" />
        </li>
        <li className="group flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-x-2">
              <input
                title="door-delivery"
                type="radio"
                name="preferred-delivery"
                id="door-delivery"
                className="h-4.5 w-4.5 group-hover:before:bg-primary/30 before:duration-200 before:-left-1.5 before:-top-1.5 before:rounded-full before:absolute before:w-7.5 before:h-7.5 relative accent-primary"
              />
              <label className="font-medium" htmlFor="door-delivery">
                Door Delivery (₦{500 * cart.length})
              </label>
            </div>
            <p className="text-xs text-gray-600 pl-6.5">
              Delivery between <strong>{getDeliveryDate(3)}</strong> and{" "}
              <strong>{getDeliveryDate(6)}</strong>
            </p>
          </div>
          <FaTruckFast className="text-secondary text-2xl" />
        </li>
      </ul>
      <div className="grid grid-cols-2 gap-y-3 gap-x-4 p-4">
      {cart.map((item, index) => (
        <div className="space-y-1" key={index}>
          <div className="flex items-center justify-between text-sm">
            <h6 className="font-medium">Shipment {index+1}/{cart.length}</h6>
            <p className="text-gray-600">Fulfilled by {item.seller}</p>
          </div>
          <div className="border border-gray-300 rounded-sm">
            <div className="space-y-1 border-b border-gray-200 p-2">
              <h5 className="font-medium">Door Delivery</h5>
              <p className="text-xs text-gray-600">
                Delivery between <strong>{getDeliveryDate(3)}</strong> and{" "}
                <strong>{getDeliveryDate(6)}</strong>
              </p>
            </div>
            <div className="p-2 flex items-start gap-x-2">
              <div className="relative">
                <Image className="w-14 h-14 rounded-xs object-cover" src={item.image} alt={item.name} />
                <p className="text-xs bg-gray-300 absolute top-0 right-0 p-0.5 rounded-xs">x{item.quantity}</p>
              </div>
              <div className="text-sm">
                <h6>{item.name}</h6>
                <p className="text-gray-500">{item.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default EditDeliveryDetails;
