"use client";

import { useCartStore } from "@/Utils/storeCart";
import { useState } from "react";

const useReport = () => {
  const addReport = useCartStore((state) => state.addReport);
  const [reason, setReason] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const confirmSubmit = () => {
    setShowConfirm(false);

    // simulate API call
    setTimeout(() => setShowSuccess(true), 500);
    setTimeout(() => setShowSuccess(false), 2000);

    // Reset form
    setReason("");
    setAdditionalDetails("");
  };

  const storeReports = (id: number) => {
    addReport({ id, reason, additionalDetails });
  };

  return {
    storeReports,
    showConfirm,
    setShowConfirm,
    showSuccess,
    confirmSubmit,
    reason,
    setReason,
    additionalDetails,
    setAdditionalDetails,
  };
};

export default useReport;
