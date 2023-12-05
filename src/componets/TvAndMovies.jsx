import React, { useEffect, useState } from "react";
import Content from "./Content";
import SearchInput from "./SearchInput";
import { Navigate, useLocation } from "react-router-dom";
import details from "./MovieServices";
import axios from "axios";

export default function () {
  const loc = useLocation();
  const [type, setType] = useState(loc.pathname);
  const endpoints = details();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const fetchData = await axios.get(
          `${type === "/tv" ? endpoints.popularTv : endpoints.popular}`
        );
        const getData = await fetchData.data.results;
        setData(getData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        Navigate("/error");
      }
    }, 5000);
  }, [type]);
  console.log(data);
  return (
    <div
      className=" max-lg:px-16 pb-16 relative flex flex-col max-md:items-center max-md:justify-center px-28 h-full pt-48  justify-between gap-14 max-sm:flex-col bg-cover object-cover  max-md:flex-col max-sm:h-full max-md:h-full max-sm:pt-36 max-md:pt-36 max-sm:px-8 max-md:px-8 max-sm:py-11 max-md:py-11"
      style={{ backgroundImage: `url("/Background.png")` }}
    >
      <div className="flex flex-col gap-4 w-1/2 max-md:w-full text-slate-200 max-md:text-center">
        <p className="text-indigo-500 text-base flex flex-col">
          Filmbox
          <span className="text-slate-200 text-7xl font-bold">
            {type === "/tv" ? "TV Shows" : "Movies"}
          </span>
        </p>
        <div className="max-md:w-full">
          <SearchInput />
        </div>
      </div>
      <Content data={data} type={type} isLoading={isLoading} />
    </div>
  );
}
