"use client";
import AddCartButton from "./AddCartButton";
import { useCartStore } from "@/Utils/storeCart";
import Counter from "./Counter";
import { StaticImageData } from "next/image";

interface CartButtonsProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: StaticImageData;
    quantity: number;
    seller: string;
  };
  icon: boolean;
  addClass: string;
  counterClass: string;
}

const CartButtons = ({
  product,
  icon,
  addClass,
  counterClass,
}: CartButtonsProps) => {
  const cart = useCartStore((state) => state.cart) as {
    id: number;
    quantity: number;
  }[];
  const getQuantity =
    cart.find((item) => item.id === product.id)?.quantity ?? 0;
  const isInCart = getQuantity > 0;
  return (
    <>
      {isInCart ? (
        <Counter
          item={{ id: product.id, quantity: getQuantity, }}
          counterClass={counterClass}
        />
      ) : (
        <AddCartButton
          product={{
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: product.quantity,
            seller: product.seller,
          }}
          icon={icon}
          addClass={addClass}
        />
      )}
    </>
  );
};

export default CartButtons;
