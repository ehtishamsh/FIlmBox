import React from "react";
import SearchAllInput from "./SearchAllInput";

export default function Hero() {
  return (
    <div className="px-28 max-lg:px-16 relative flex items-center h-[700px] z-20 justify-between gap-14 max-sm:flex-col max-md:flex-col max-sm:h-full max-md:h-full max-sm:pt-36 max-md:pt-36 max-sm:px-8 max-md:px-8 max-sm:py-11 max-md:py-11">
      <div className="flex w-[40%] h-full flex-col text-slate-100 max-sm:w-full max-md:w-full justify-center max-sm:z-50 max-md:z-50">
        <h1 className="text-6xl font-bold text-left max-sm:text-center max-md:text-center mb-10 max-sm:mb-8 max-md:mb-8">
          FILMBOX
        </h1>
        <p className="text-base text-slate-400 text-left max-sm:text-center max-md:text-center">
          In Filmbox, you can browse a list of movies and TV shows, viewing
          their details. Additionally, you have the option to search for
          specific movies and TV shows. Explore and discover the content you
          want to learn more about. 😉
        </p>
        <SearchAllInput />
      </div>
      <div className="relative w-[60%] h-full   max-sm:w-full max-md:w-full  overflow-hidden max-sm:absolute max-sm:top-0 max-sm:left-0 max-md:absolute max-md:top-0 max-md:left-0 z-30 ">
        <img
          src="/heroImg.jpg"
          alt=""
          className="w-full h-full select-none object-cover object-center relative  max-sm:opacity-50 max-md:opacity-50 z-10"
        />
        <div className="absolute top-0 z-20 right-0 bottom-0 left-0 w-full   bg-gradient-radial  from-transparent via-transparent to-slate-950">
          <div className="absolute top-0 z-20 right-0 bottom-0 left-0 w-full   bg-gradient-to-b  from-slate-950 via-transparent to-slate-950"></div>
          <div className="absolute top-0 z-20 right-0 bottom-0 left-0 w-full   bg-gradient-to-r  from-slate-950 via-transparent to-slate-950"></div>
        </div>
      </div>
    </div>
  );
}
