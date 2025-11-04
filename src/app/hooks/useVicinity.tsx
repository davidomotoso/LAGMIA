"use client";
import { ChangeEvent, useState } from "react";
import { unilagLandmarks, CmulLandmarks } from "@/components/Exports";

const useVicinity = () => {
  const [landmarks, setLandmarks] = useState<string[]>([]);
  const handleVicinity = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "akoka") {
      setLandmarks(unilagLandmarks);
    } else if (value === "idi-araba") {
      setLandmarks(CmulLandmarks);
    } else {
      setLandmarks([]);
    }
  };

  return {
    handleVicinity,
    landmarks,
  };
};

export default useVicinity;
