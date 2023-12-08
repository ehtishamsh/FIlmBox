import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchAllInput from "./SearchAllInput";
import Content from "./Content";
import details from "./MovieServices";
import axios, { all } from "axios";

function Search() {
  const { keyword } = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [dataAll, setDataAll] = useState();
  const [page, setPage] = useState(1);
  const endpoints = details(keyword, "", page);
  useEffect(() => {
    setPage(1);
  }, [keyword]);
  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      const fetch = await axios.get(endpoints.searchAll);
      const getData = await fetch.data;
      setDataAll(getData);
      const filterData = getData.results?.filter(
        (item) => item.media_type !== "person"
      );
      setData(filterData);
      setLoading(false);
    }, 2000);
  }, [keyword, page]);
  function handleClickSearch(event) {
    event.target.name === "next"
      ? setPage((prev) => prev + 1)
      : setPage((prev) => (prev > 1 && prev - 1) || 1);
  }
  return (
    <div
      className=" pt-52 px-28 flex flex-col max-md:px-6 max-lg:px-16 py-6 object-cover"
      style={{ backgroundImage: `url("/Background.png")` }}
    >
      <div className="flex flex-col gap-4 w-1/2 max-md:w-full text-slate-200 max-md:text-center">
        <p className="text-indigo-500 text-base flex flex-col">
          Filmbox
          <span className="text-slate-200 text-6xl font-bold">
            Search Movies and tv shows
          </span>
        </p>
        <div className="max-md:w-full mb-14">
          <SearchAllInput />
        </div>
      </div>
      <Content isLoading={loading} data={data} />
      {dataAll && dataAll.total_pages > 2 && (
        <div className="w-full flex justify-center items-center gap-2">
          <button
            onClick={(e) => handleClickSearch(e)}
            name="prev"
            className="bg-inherit text-slate-500 font-bold"
          >
            Prev
          </button>
          <div className="rounded-full font-bold px-6 py-4  bg-transparent border-[4px] border-orange-500 text-indigo-400">
            <p className="pointer-events-none">{page < 5 ? page : "Go Back"}</p>
          </div>
          <button
            onClick={(e) => handleClickSearch(e)}
            name="next"
            disabled={page < 5 ? false : true}
            className="bg-inherit text-slate-500 font-bold"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
export default Search;
