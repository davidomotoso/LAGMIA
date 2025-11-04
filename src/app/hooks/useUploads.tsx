"use client";
import { ChangeEvent, useState } from "react";
import useFunctions from "./useFunctions";

const useUploads = () => {
  const { alertMessage } = useFunctions();
  const [fileName, setFileName] = useState<string>("");

  const handlePdf = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      alertMessage("Please upload a PDF file only!", "bg-red-500");
      e.target.value = "";
      setFileName("");
    } else {
      setFileName(file.name);
    }
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
