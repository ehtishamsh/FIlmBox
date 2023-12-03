import React from "react";
import Cards from "./Cards";

function TopContent() {
  return (
    <div className="mt-8 px-28 flex flex-col max-sm:px-10 max-md:px-10 max-lg:px-16 py-6 bg-gradient-to-t from-[rgba(2,6,23,1)] via-[#040c2c] to-[rgba(2,6,23,1)]">
      <div className="flex items-center mb-8 gap-5 max-sm:flex-col  max-md:flex-col">
        <h1 className="text-3xl font-bold text-slate-200 max-sm:text-xl  max-md:text-2xl">
          Recommended
        </h1>
        <div className="flex items-center text-gray-200 rounded-xl bg-slate-900 w-fit p-2 max-xxm:text-sm">
          <button className="px-8 py-2 rounded-lg max-sm:px-4 max-md:px-6 max-xxm:px-2">
            Trending
          </button>
          <button className="px-8 py-2 rounded-lg  max-sm:px-4 max-md:px-6 max-xxm:px-2 bg-indigo-500">
            Movies
          </button>
          <button className="px-8 py-2 rounded-lg  max-sm:px-4 max-md:px-6 max-xxm:px-2">
            TV Shows
          </button>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(_4,auto)] pb-5 justify-between gap-y-7 max-xxsm:gap-x-[4px] max-md:grid-cols-[repeat(_3,auto)] max-sm:grid-cols-[repeat(_2,auto)] ">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default TopContent;
