import React from "react";
import Cards from "./Cards";

function TopContent() {
  return (
    <div className="mt-12 px-28 flex flex-col">
      <div className="flex items-center mb-8 gap-5">
        <h1 className="text-3xl font-bold text-slate-200">Recommended</h1>
        <div className="flex items-center text-gray-200 rounded-xl bg-slate-900 w-fit p-2">
          <button className="px-8 py-2 rounded-lg">Trending</button>
          <button className="px-8 py-2 rounded-lg bg-indigo-500">Movies</button>
          <button className="px-8 py-2 rounded-lg">TV Shows</button>
        </div>
      </div>
      <div className="flex flex-wrap mt-7 justify-center gap-6 last:justify-self-start">
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
