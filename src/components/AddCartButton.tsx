"use client";
import { FaCartPlus } from "react-icons/fa6";
import useCart from "@/Utils/useCart";
import { StaticImageData } from "next/image";

interface AddCartButtonProps {
  product: { image: StaticImageData; name: string; price: string };
  icon: boolean;
  addClass: string;
}

const AddCartButton = ({ product, icon,addClass }: AddCartButtonProps) => {
  const { pushToCart } = useCart();
  return (
    <button
      type="submit"
      onClick={() => pushToCart(product)}
      className={`bg-primary text-white ${addClass} rounded-md cursor-pointer flex items-center w-full mt-4 font-medium hover:bg-primary/90 duration-200`}
    >
      {icon && <FaCartPlus className="text-xl" />}
      <span className="mx-auto">Add to cart</span>
    </button>
  );
};

export default AddCartButton;
