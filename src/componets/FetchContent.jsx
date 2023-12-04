import React from "react";
import Cards from "./Cards";

export default function FetchContent() {
  return (
    <div className="pt-12 px-28 flex flex-col max-sm:px-10 max-md:px-10 max-lg:px-16 py-6">
      <h2 className="mb-5 text-slate-500 text-xl">142 items</h2>
      <div className="grid grid-cols-[repeat(_4,auto)] pb-5 justify-between gap-y-7 max-xxsm:gap-x-[4px] max-md:grid-cols-[repeat(_3,auto)] max-sm:grid-cols-[repeat(_2,auto)] ">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
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
