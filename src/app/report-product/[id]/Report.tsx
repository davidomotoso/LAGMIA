"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import successAnimation from "@/../public/lottie/success.json";
import useReport from "@/app/hooks/useReport";

const Report = ({ id }: { id: number }) => {
  const {
    reason,
    setReason,
    additionalDetails,
    setAdditionalDetails,
    showConfirm,
    setShowConfirm,
    showSuccess,
    confirmSubmit,
    storeReports,
  } = useReport();
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="reason-select" className="block mb-2 font-medium">
          Reason for Report <span className="text-red-600">*</span>
        </label>
        <select
          id="reason-select"
          className="w-full border border-gray-500 rounded-lg p-3 mb-5"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        >
          <option value="">Select a reason</option>
          <option value="fake">Fake / Counterfeit Product</option>
          <option value="scam">Scam / Fraudulent Listing</option>
          <option value="wrong-info">Misleading Information</option>
          <option value="violation">Violates Terms</option>
          <option value="other">Other</option>
        </select>
        <label className="block mb-2 font-medium">
          Additional Details (optional)
        </label>
        <textarea
          className="w-full border border-gray-500 rounded-lg p-3 h-36 mb-6"
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
          placeholder="Provide more information to help our team..."
        />
        <button
          type="submit"
          onClick={() => {
            if (reason !== "") {
              setShowConfirm(true);
            }
          }}
          className="w-full bg-primary/85 cursor-pointer text-white py-3 rounded-md font-semibold hover:bg-primary duration-150 transition"
        >
          Submit Report
        </button>
      </form>
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-sm shadow-lg">
            <h2 className="text-xl font-semibold mb-3">Confirm Report</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to report this product? This action cannot
              be undone.
            </p>
            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-lg"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-primary/90 cursor-pointer text-white rounded-sm hover:bg-primary"
                onClick={() => {
                  confirmSubmit(), storeReports(id);
                }}
              >
                Yes, Report
              </button>
            </div>
          </div>
        </div>
      )}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-xs text-center shadow-lg">
            <Player
              autoplay
              loop={false}
              src={successAnimation}
              style={{ height: "120px" }}
            />

            <h2 className="text-xl font-semibold mt-3">Report Submitted</h2>
            <p className="text-gray-600 mt-1 mb-3 text-sm">
              Our team will review it shortly.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Report;
