import React from "react";

function Cards() {
  return (
    <div className="flex flex-col gap-5 px-2 pt-2 pb-4 w-72 rounded-xl bg-slate-800 bg-opacity-50">
      <img
        src="https://image.tmdb.org/t/p/w500/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg"
        alt=""
      />
      <h1 className="text-base text-slate-200 font-bold p-2">
        Avengers the Endgame
      </h1>
    </div>
  );
}

export default Cards;
