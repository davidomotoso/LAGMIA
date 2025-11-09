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

  return {
    getDeliveryDate,
    alertMessage,
    handleRating,
    handleFilterRatings,
  };
};
export default useFunctions;
