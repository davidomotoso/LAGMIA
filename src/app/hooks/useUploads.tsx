"use client";
import { ChangeEvent, useState } from "react";
import useFunctions from "./useFunctions";

const useUploads = () => {
  const { alertMessage } = useFunctions();
  const [fileName, setFileName] = useState<string>("");

  const handlePdf = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return setFileName("");

    const errors = {
      type: file.type !== "application/pdf" && "Please upload a PDF file only!",
      size: file.size > 1 * 1024 * 1024 && "File too large! Max 1MB allowed.",
    };

    const errorMsg = errors.type || errors.size;
    if (errorMsg) {
      alertMessage(errorMsg, "bg-red-500");
      e.target.value = "";
      setFileName("");
      return;
    }

    setFileName(file.name);
  };

  const handleClearFile = () => {
    setFileName("");
  };

  return {
    handlePdf,
    handleClearFile,
    fileName,
  };
};

export default useUploads;
