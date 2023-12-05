import React from "react";

function ErrorPage() {
  return (
    <div
      className=" pb-16 flex flex-col items-center justify-center px-10 h-full pt-32  gap-14 max-sm:flex-col bg-cover object-cover"
      style={{ backgroundImage: `url("/Background.png")` }}
    >
      <img src="/error.png" alt="" className="w-full h-full max-w-[400px]" />
    </div>
  );
}

export default ErrorPage;
