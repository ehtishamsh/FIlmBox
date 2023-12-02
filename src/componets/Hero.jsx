import React from "react";

export default function Hero() {
  return (
    <div className="px-28 max-lg:px-16 relative flex items-center h-[700px] z-20 justify-between gap-14 max-sm:flex-col max-md:flex-col max-sm:h-full max-md:h-full max-sm:pt-36 max-md:pt-36 max-sm:px-8 max-md:px-8 max-sm:py-11 max-md:py-11">
      <div className="flex w-[40%] h-full flex-col text-slate-100 max-sm:w-full max-md:w-full justify-center max-sm:z-50 max-md:z-50">
        <h1 className="text-6xl font-bold text-left max-sm:text-center max-md:text-center mb-10 max-sm:mb-8 max-md:mb-8">
          FILMBOX
        </h1>
        <p className="text-base text-slate-400 text-left max-sm:text-center max-md:text-center">
          List of movies and TV Shows, I, Pramod Poudel have watched till date.
          Explore what I have watched and also feel free to make a suggestion.
          😉
        </p>
        <form
          action=""
          className="flex items-center justify-center mt-11 max-sm:mt-8 max-md:mt-8 relative w-full"
        >
          <input
            type="text"
            className="w-full bg-inherit focus:outline-indigo-600 focus:outline-4 focus:border-transparent outline-none pr-4 pl-14 py-4 border transition-all duration-300 border-solid border-slate-600 rounded-xl  "
          />
          <button className="absolute left-0 ml-4">
            <img src="/search-normal.png" className="" alt="" />
          </button>
        </form>
      </div>
      <div className="relative w-[60%] h-full  max-sm:w-full max-md:w-full overflow-hidden max-sm:absolute max-sm:top-0 max-sm:left-0 max-md:absolute max-md:top-0 max-md:left-0 z-30">
        <img
          src="/heroImg.jpg"
          alt=""
          className="w-full h-full select-none object-cover object-center relative z-10 max-sm:opacity-50 max-md:opacity-50"
        />
        <div className="absolute top-0 z-20 right-0 bottom-0 left-0 bg-gradient-to-b from-slate-950 via-transparent to-transparent">
          <div className="absolute top-0 z-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent via-transparent to-slate-950"></div>
        </div>
        <div className="absolute top-0 z-20 right-0 bottom-0 left-0 bg-gradient-to-r from-transparent via-transparent to-slate-950">
          <div className="absolute top-0 z-20 right-0 bottom-0 left-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
