import { useCartStore } from "../../Utils/storeCart";

const useFunctions = () => {
  const getDeliveryDate = (daysToAdd: number): string => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + daysToAdd);
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    return currentDate.toLocaleDateString(undefined, options);
  };

  const alertMessage = (message: string, color: string) => {
    const setAlert = useCartStore.getState().setAlert;
    setAlert({ message, type: true, color });
    setTimeout(() => {
      setAlert({ message: "", type: false, color: "" });
    }, 2000);
  };

  return {
    getDeliveryDate,
    alertMessage,
  };
};
export default useFunctions;
