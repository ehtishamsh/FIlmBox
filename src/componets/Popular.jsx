import React from "react";
import Content from "./Content";

export default function Popular({ data, isLoadingPop }) {
  return (
    <div className="mt-8 px-28 flex flex-col  max-md:px-5 max-lg:px-16 py-6 bg-gradient-to-t from-[rgba(2,6,23,1)] via-[#040c2c] to-[rgba(2,6,23,1)]">
      <div className="flex items-center mb-8 gap-5 max-sm:flex-col mt-14  max-md:flex-col">
        <h1 className="text-3xl font-bold text-slate-200 max-sm:text-xl  max-md:text-2xl">
          Popular on Filmbox
        </h1>
      </div>
      <Content data={data} isLoading={isLoadingPop} type={"movie"} />
    </div>
  );
}
