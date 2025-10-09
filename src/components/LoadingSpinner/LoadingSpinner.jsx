import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loader-container fixed inset-0 flex justify-center items-center bg-white/60">
      <div className="loader w-12 h-12 border-4 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
