"use client";
import useUploads from "@/app/hooks/useUploads";
import { useState } from "react";
import { BsFolderFill, BsInfoCircle, BsX } from "react-icons/bs";

const UploadBioData = () => {
  const { handlePdf, handleClearFile, fileName } = useUploads();
  const [showInfo, setShowInfo] = useState(false);
  return (
    <section className="px-6 pb-4">
      <div className="relative">
        <h6 className="flex items-center gap-x-2 text-sm font-medium mb-2">
          Upload BioData
          <BsInfoCircle
            onClick={() => setShowInfo(!showInfo)}
            className="hover:text-secondary cursor-pointer duration-150"
          />
        </h6>
        {showInfo && (
          <div className="absolute -top-26 left-31">
            <p className="bg-neutral-200 text-sm w-64 rounded-md p-3">
              This document is required to verify your status as a UNILAG/CMUL
              student. Once verified, a confirmation email will be sent within
              24 hours.
            </p>
            <div className="absolute -bottom-2 -left-1.75 w-0 h-0 rotate-36 border-x-transparent border-x-12 border-t-16 border-t-neutral-200"></div>
          </div>
        )}
      </div>
      <label
        className="block w-full border-dashed border-2 border-secondary rounded-md h-48 cursor-pointer"
        htmlFor="bio-data"
      >
        <div className="font-medium grid place-content-center place-items-center w-full h-full gap-2 hover:text-secondary transition-all duration-150">
          <BsFolderFill />
          Upload Bio-data
        </div>
      </label>
      <input
        onChange={(e) => handlePdf(e)}
        className="hidden"
        type="file"
        id="bio-data"
        accept=".pdf"
        required
      />
      {fileName !== "" && (
        <div className="py-0.5 px-2 text-sm mt-2 bg-gray-200 rounded-full flex items-center gap-x-2 w-fit">
          {fileName}{" "}
          <BsX
            className="text-xl rounded-full p-0.5 hover:bg-gray-300 duration-150"
            onClick={handleClearFile}
          />
        </div>
      )}
    </section>
  );
};

export default UploadBioData;
