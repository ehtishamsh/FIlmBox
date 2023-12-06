import React from "react";
import { useLocation } from "react-router-dom";

function ErrorPage() {
  const location = useLocation();
  const errorMessage = location.state?.message || "Lost your way";
  return (
    <div
      className=" pb-16 flex flex-col items-center justify-center px-10 h-full pt-32  gap-14 max-sm:flex-col bg-cover object-cover"
      style={{ backgroundImage: `url("/Background.png")` }}
    >
      <img src="/error.png" alt="" className="w-full h-full max-w-[400px]" />
      <h2 className="text-9xl mt-10 text-slate-200">{errorMessage}</h2>
    </div>
  );
}

export default ErrorPage;
