import { useCartStore } from "../../Utils/storeCart";
import useFunctions from "./useFunctions";

const useCartFunctions = () => {
  const { alertMessage } = useFunctions();
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
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

  const handleDeliveryFee = (length: number) => {
    const total = 500 * length;
    return total
      .toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
      })
      .replace(/\.00$/, "");
  };

  const handleRemoveItem = (quantity: number, id: number) => {
    if (quantity === 1) {
      alertMessage("Item removed from cart", "bg-red-600");
    }
    decrementQuantity(id);
  };

  return {
    calTotalPrice,
    calPriceAndDeliveryFee,
    handleDeliveryFee,
    handleRemoveItem
  };
};

export default useCartFunctions;
