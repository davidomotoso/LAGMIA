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

  const handleRating = (rating: number[]) => {
    return rating.reduce((acc, curr) => acc + curr, 0) / rating.length;
  };

  const handleFilterRatings = (rating: number[], filterValue: number) => {
    const numberOfRates = rating.filter((rate) => rate === filterValue).length;
    const percentageOfRates = (numberOfRates / rating.length) * 100;
    return { numberOfRates, percentageOfRates };
  };

  const getStockStatus = (qty: number, qtySold: number) => {
    if (qtySold >= qty) return { text: "Out Of Stock", color: "text-gray-500" };
    const soldPercentage = (qtySold / qty) * 100;
    const unit = qty - qtySold;

    if (soldPercentage < 70) {
      return { text: "In Stock", color: "text-green-500" };
    } else if (unit !>= 7) {
      return { text: "Few Units Left", color: "text-yellow-500" };
    } else {
      return { text: `${unit} Units Left`, color: "text-red-500" };
    }
  };

  return {
    getDeliveryDate,
    alertMessage,
    handleRating,
    handleFilterRatings,
    getStockStatus,
  };
};
export default useFunctions;
