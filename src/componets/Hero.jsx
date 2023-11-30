import React from "react";

export default function Hero() {
  return (
    <div className="px-32 relative flex items-center h-[600px] z-20">
      <div className="relative w-full h-full overflow-hidden">
        <img
          src="/heroImg.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-50 relative z-10"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 z-20">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900"></div>
        </div>
      </div>
    </div>
  );
}
