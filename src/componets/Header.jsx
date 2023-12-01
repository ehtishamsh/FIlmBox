import React, { useEffect, useState, useRef } from "react";
import useScrollDirection from "./Hooks";
function Header() {
  const scroll = useScrollDirection();
  return (
    <header
      className={` top-0 sticky transition-all duration-500 z-[9999]  ${
        scroll === "down" ? "-top-24" : "top-0"
      }`}
    >
      <nav className="flex justify-between items-center bg-transparent absolute py-5 px-28 max-sm:px-8 bg-gradient-to-r from-slate-950 via-transparent to-slate-950  w-full ">
        <img src="/logoWIthText.png" alt="" className="h-12 max-sm:h-10" />
        <div className="flex gap-4 text-slate-300 font-semibold max-sm:hidden">
          <a
            href=""
            className="hover:text-indigo-600 transition-color duration-500"
          >
            Movies
          </a>
          <a
            href=""
            className="hover:text-indigo-600 transition-color duration-500"
          >
            TV Shows
          </a>
          <a
            href=""
            className="hover:text-indigo-600 transition-color duration-500"
          >
            Search
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
