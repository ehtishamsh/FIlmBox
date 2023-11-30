import React from "react";

function Header() {
  return (
    <header className="py-4 px-28 bg-transparent z-50">
      <nav className="flex justify-between items-center">
        <img src="/logoWIthText.png" alt="" className="h-12" />
        <div className="flex gap-4 text-gray-300 font-semibold">
          <a
            href=""
            className="hover:text-gray-400 transition-color duration-500"
          >
            Movies
          </a>
          <a
            href=""
            className="hover:text-gray-400 transition-color duration-500"
          >
            TV Shows
          </a>
          <a
            href=""
            className="hover:text-gray-400 transition-color duration-500"
          >
            Search
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
