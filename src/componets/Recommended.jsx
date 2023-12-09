import React from "react";
import Content from "./Content";

function Recommended({ recommended, handleClick, trendData, isLoading }) {
  return (
    <div className="mt-8 px-28 flex flex-col max-md:px-5 max-lg:px-16 py-6 bg-gradient-to-t from-[rgba(2,6,23,1)] via-[#040c2c] to-[rgba(2,6,23,1)]">
      <div className="flex items-center mb-8 gap-5 max-sm:flex-col  max-md:flex-col">
        <h1 className="text-3xl font-bold text-slate-200 max-sm:text-xl  max-md:text-2xl">
          Recommended
        </h1>
        <div className="flex items-center text-gray-200 rounded-xl bg-slate-900 w-fit p-2 max-xxm:text-sm transition-all duration-300">
          <button
            onClick={(event) => handleClick(event)}
            name="all"
            className={`px-8 py-2 ${
              recommended === "all" ? "bg-indigo-500" : ""
            } rounded-lg max-sm:px-4 max-md:px-6 max-xxm:px-2 transition-all duration-300`}
          >
            Trending
          </button>
          <button
            onClick={handleClick}
            name="movie"
            className={`px-8 py-2 ${
              recommended === "movie" ? "bg-indigo-500" : ""
            } rounded-lg max-sm:px-4 max-md:px-6 max-xxm:px-2 transition-all duration-300`}
          >
            Movies
          </button>
          <button
            onClick={handleClick}
            className={`px-8 py-2 ${
              recommended === "tv" ? "bg-indigo-500" : ""
            } rounded-lg max-sm:px-4 max-md:px-6 max-xxm:px-2 transition-all duration-300`}
            name="tv"
          >
            TV Shows
          </button>
        </div>
      </div>
      <Content data={trendData} isLoading={isLoading} />
    </div>
  );
}

export default Recommended;
