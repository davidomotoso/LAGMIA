import { useCartStore } from "../../Utils/storeCart";

const useCartFunctions = () => {
  const calTotalPrice = () => {
    const cart = useCartStore.getState().cart as {
      price: string;
      quantity: number;
    }[];
    let total = 0;
    cart.forEach((item) => {
      const price =
        parseFloat(item.price.replace(/[^0-9.-]+/g, "")) * item.quantity;
      total += price;
    });
    return total
      .toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
      })
      .replace(/\.00$/, "");
  };

  const calPriceAndDeliveryFee = (price: string, fee: number | string) => {
    const cart = useCartStore.getState().cart;
    const filteredPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    const numericFee =
      typeof fee === "string" ? parseFloat(fee) || 0 : fee * cart.length;

    const total = filteredPrice + numericFee;

    return total
      .toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
      })
      .replace(/\.00$/, "");
  };

  return {
    calTotalPrice,
    calPriceAndDeliveryFee,
  };
};

export default useCartFunctions;
