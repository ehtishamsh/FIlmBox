import React from "react";
import FetchContent from "./FetchContent";

export default function () {
  return (
    <div
      className=" max-lg:px-16 relative flex flex-col items-center h-full pt-48  justify-between gap-14 max-sm:flex-col bg-cover object-cover  max-md:flex-col max-sm:h-full max-md:h-full max-sm:pt-36 max-md:pt-36 max-sm:px-8 max-md:px-8 max-sm:py-11 max-md:py-11"
      style={{ backgroundImage: `url("/Background.png")` }}
    >
      <div className="w-1/2 px-28 flex flex-col gap-4 text-slate-200">
        <p className="text-indigo-500 text-base flex flex-col">
          Filmbox
          <span className="text-slate-200 text-7xl font-bold">Movies</span>
        </p>
        <form action="" className="input-group">
          <input
            type="text"
            placeholder="Eg"
            id="search"
            className="input-field"
          />
          <label htmlFor="search" className="input-label">
            Search for movies and tv shows
          </label>
          <button className="absolute left-0  ml-4 mt-5">
            <img src="/search-normal.png" className="" alt="" />
          </button>
        </form>
      </div>
      <FetchContent />
    </div>
  );
}
