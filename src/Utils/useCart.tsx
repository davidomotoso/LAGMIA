"use client";
import { StaticImageData } from "next/image";
import { useState } from "react";

const useCart = () => {
  const [alert, setAlert] = useState(false);
  const [cart, setCart] = useState([]);
  const pushToCart = (
    product: { image: StaticImageData; name: string; price: string },
  ) => {
    const { image, name, price } = product;
    setCart({image, name, price });
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  return {
    pushToCart,
    alert,
    cart,
  };
};

export default useCart;
