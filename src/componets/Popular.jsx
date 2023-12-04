import React from "react";
import Cards from "./Cards";

function Popular() {
  return (
    <div className="mt-12 mb-16 px-28 flex flex-col max-sm:px-10 max-md:px-10 max-lg:px-16 bg-gradient-to-t from-[rgba(2,6,23,1)] via-[#040c2c] to-[rgba(2,6,23,1)] py-10 rounded-3xl bg-g">
      <div className="flex items-center mb-8 gap-5 max-sm:flex-col  max-md:flex-col">
        <h1 className="text-3xl font-bold text-slate-200 max-sm:text-xl  max-md:text-2xl">
          Popular on Filmbox
        </h1>
      </div>
      <div className="grid grid-cols-[repeat(_4,auto)] pb-5 justify-between gap-y-7 max-xxsm:gap-x-[4px] max-md:grid-cols-[repeat(_3,auto)]  max-sm:grid-cols-[repeat(_2,auto)] ">
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

export default Popular;
