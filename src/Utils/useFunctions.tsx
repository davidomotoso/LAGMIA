import { BsBagCheckFill } from "react-icons/bs";
import { FaCheck, FaCheckDouble, FaX } from "react-icons/fa6";

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

  const getAppraisal = (score: number) => {
    if (score >= 75) {
      return {
        icon: <BsBagCheckFill className="text-xs" />,
        grade: "Excellent",
        color: "bg-green-500",
      };
    } else if (score >= 60) {
      return {
        icon: <FaCheckDouble className="text-xs" />,
        grade: "Good",
        color: "bg-blue-500",
      };
    } else if (score >= 40) {
      return {
        icon: <FaCheck className="text-xs" />,
        grade: "Average",
        color: "bg-secondary",
      };
    } else {
      return {
        icon: <FaX className="text-xs" />,
        grade: "Poor",
        color: "bg-red-500",
      };
    }
  };

  return { getDeliveryDate, getAppraisal };
};
export default useFunctions;
