import React from "react";

function Header() {
  return (
    <header className="py-5 px-28 max-sm:px-8 bg-transparent z-50 sticky top-0">
      <nav className="flex justify-between items-center bg-transparent">
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
