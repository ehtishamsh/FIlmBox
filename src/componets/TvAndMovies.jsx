import React, { useEffect, useState } from "react";
import Content from "./Content";
import SearchInput from "./SearchInput";
import { useLocation } from "react-router-dom";
import details from "./MovieServices";
import axios from "axios";

export default function TvAndMovies() {
  const [searchData, setSearchData] = useState([]);
  const [checkSearch, setCheckSearch] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSearch, setPageSearch] = useState(1);
  const [searchLoading, setsearchLoading] = useState(true);
  const loc = useLocation().pathname;
  const endpoints = details("", "", page);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  function handleClick(event) {
    event.target.name === "next"
      ? setPage((prev) => prev + 1)
      : setPage((prev) => (prev > 1 && prev - 1) || 1);
  }
  function handleClickSearch(event) {
    event.target.name === "next"
      ? setPageSearch((prev) => prev + 1)
      : setPageSearch((prev) => (prev > 1 && prev - 1) || 1);
  }
  useEffect(() => {
    if (page > 1) {
      setPage(1);
      setPageSearch(1);
    }
  }, [loc]);
  useEffect(() => {
    setCheckSearch(false);
    setIsLoading(true);
    setTimeout(async () => {
      const fetchData = await axios.get(
        `${loc === "/tv" ? endpoints.popularTv : endpoints.popular}`
      );
      const getData = await fetchData.data.results;
      setData(getData);
      setPageSearch(1);
      setIsLoading(false);
    }, 3000);
  }, [loc, page]);
  console.log(searchData);
  return (
    <div
      className=" pt-52 px-28 flex flex-col max-md:px-5 max-lg:px-16 py-6 object-cover"
      style={{ backgroundImage: `url("/Background.png")` }}
    >
      <div className="flex flex-col gap-4 w-1/2 max-md:w-full text-slate-200 max-md:text-center">
        <p className="text-indigo-500 text-base flex flex-col">
          Filmbox
          <span className="text-slate-200 text-7xl font-bold">
            {loc === "/tv" ? "TV Shows" : "Movies"}
          </span>
        </p>
        <div className="max-md:w-full mb-14">
          <SearchInput
            loading={setsearchLoading}
            setData={setSearchData}
            setCheckSearch={setCheckSearch}
            page={pageSearch}
          />
        </div>
      </div>

      {!checkSearch ? (
        <>
          <Content data={data} type={loc} isLoading={isLoading} />

          <div className="w-full flex justify-center items-center gap-2">
            <button
              onClick={(e) => handleClick(e)}
              name="prev"
              className="bg-inherit text-slate-500 font-bold"
            >
              Prev
            </button>
            <div className="rounded-full font-bold px-6 py-4  bg-transparent border-[4px] border-orange-500 text-indigo-400">
              <p className="pointer-events-none">
                {" "}
                {page < 5 ? page : "Go Back"}
              </p>
            </div>
            <button
              onClick={(e) => handleClick(e)}
              name="next"
              disabled={page < 5 ? false : true}
              className="bg-inherit text-slate-500 font-bold"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <>
          <Content
            data={searchData.results}
            type={loc}
            isLoading={searchLoading}
          />
          {searchData.total_pages > 2 && (
            <div className="w-full flex justify-center items-center gap-2">
              <button
                onClick={(e) => handleClickSearch(e)}
                name="prev"
                className="bg-inherit text-slate-500 font-bold"
              >
                Prev
              </button>
              <div className="rounded-full font-bold px-6 py-4  bg-transparent border-[4px] border-orange-500 text-indigo-400">
                <p className="pointer-events-none">
                  {pageSearch < 5 ? pageSearch : "Go Back"}
                </p>
              </div>
              <button
                onClick={(e) => handleClickSearch(e)}
                name="next"
                disabled={pageSearch < 5 ? false : true}
                className="bg-inherit text-slate-500 font-bold"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
