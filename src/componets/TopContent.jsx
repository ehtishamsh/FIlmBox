import React from "react";

function TopContent() {
  return (
    <div className="mt-12 px-28">
      <div className="flex items-center text-gray-200 rounded-xl bg-slate-900 w-fit p-2 mb-8">
        <button className="px-8 py-2 rounded-lg">Trending</button>
        <button className="px-8 py-2 rounded-lg bg-indigo-500">Movies</button>
        <button className="px-8 py-2 rounded-lg">TV Shows</button>
      </div>
    </div>
  );
}

export default TopContent;
