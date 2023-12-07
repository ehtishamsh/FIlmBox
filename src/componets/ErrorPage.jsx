import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ErrorPage() {
  const location = useLocation();
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  const errorMessage = location.state?.message || "Lost your way";
  return (
    <div
      className=" pb-16 flex flex-col items-center justify-center px-10 h-full pt-32  gap-10 max-sm:flex-col bg-cover object-cover"
      style={{ backgroundImage: `url("/Background.png")` }}
    >
      <img src="/error.png" alt="" className="w-full h-full max-w-[400px]" />
      <div className="text-center">
        <h2 className="text-5xl font-bold text-slate-200 mb-5">
          {errorMessage}
        </h2>
        <p className="text-base text-slate-500">
          Oops! This is awkward. You are looking for something that doesn't
          actually exist.
        </p>
      </div>
      <button
        onClick={handleClick}
        className="py-4 px-8 text-slate-200 transition-colors duration-300 hover:bg-indigo-600 active:bg-indigo-700 bg-indigo-500 rounded-2xl"
      >
        Go Home
      </button>
    </div>
  );
}

export default ErrorPage;
