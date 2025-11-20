import { JSX } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { FaCheckDouble, FaCheck, FaX } from "react-icons/fa6";

const useAppraisal = () => {
  interface Appraisal {
    icon: JSX.Element;
    grade: string;
    color: string;
  }

  type ScoreRange = {
    min: number;
    appraisal: Appraisal;
  };

  const APPRAISALS: ScoreRange[] = [
    {
      min: 75,
      appraisal: {
        icon: <BsBagCheckFill className="text-xs" />,
        grade: "Excellent",
        color: "bg-green-500",
      },
    },
    {
      min: 60,
      appraisal: {
        icon: <FaCheckDouble className="text-xs" />,
        grade: "Good",
        color: "bg-blue-500",
      },
    },
    {
      min: 40,
      appraisal: {
        icon: <FaCheck className="text-xs" />,
        grade: "Average",
        color: "bg-secondary",
      },
    },
    {
      min: 20,
      appraisal: {
        icon: <FaX className="text-xs" />,
        grade: "Poor",
        color: "bg-red-500",
      },
    },
  ];

  const getAppraisal = (score: number): Appraisal => {
    const range = APPRAISALS.find((r) => score >= r.min);
    return range!.appraisal; 
  };

  return {getAppraisal};
};

export default useAppraisal;
