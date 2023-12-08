import axios from "axios";
import React, { useEffect, useState } from "react";
import details from "./MovieServices";
import { useLocation } from "react-router-dom";

function SearchInput({ setData, setCheckSearch, loading, page }) {
  const [search, setSearch] = useState("");
  const [formData, setFormData] = useState("");
  const endpoints = details(search, "", page);
  const location = useLocation().pathname;
  function handleInput(e) {
    setSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (search === "") {
      alert("Please type something.");
    } else {
      setFormData(search);
      setCheckSearch(true);
      loading(true);
    }
  }
  useEffect(() => {
    setSearch("");
  }, [location]);
  useEffect(() => {
    loading(true);
    if (formData !== "") {
      setTimeout(async () => {
        const fetchData = await axios.get(
          location === "/tv" ? endpoints.searchTV : endpoints.searchMovie
        );
        const getData = await fetchData.data;

        setData(getData || []);
        loading(false);
      }, 4000);
    }
  }, [formData, page]);
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

export default SearchInput;
