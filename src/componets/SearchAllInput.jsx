import { replace } from "lodash";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SearchAllInput() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  function handleInput(e) {
    setSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search/${search}`);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="input-group mt-6">
      <input
        type="text"
        placeholder="Eg"
        id="search"
        className="input-field"
        onChange={(e) => handleInput(e)}
        value={search}
      />
      <label htmlFor="search" className="input-label">
        Search for movies and tv shows
      </label>
      <button className="absolute left-0  ml-4 mt-5">
        <img src="/search-normal.png" className="" alt="" />
      </button>
    </form>
  );
}

export default SearchAllInput;
