import React from "react";

function SearchInput() {
  return (
    <form action="" className="input-group mt-6">
      <input type="text" placeholder="Eg" id="search" className="input-field" />
      <label htmlFor="search" className="input-label">
        Search for movies and tv shows
      </label>
      <button className="absolute left-0  ml-4 mt-5">
        <img src="/search-normal.png" className="" alt="" />
      </button>
    </form>
  );
}

export default SearchInput;
