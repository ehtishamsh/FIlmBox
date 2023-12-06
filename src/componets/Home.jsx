import { useState, useEffect } from "react";
import Hero from "./Hero";
import Content from "./Content";
import axios from "axios";
import details from "./MovieServices";

function Home() {
  const [recommended, setRecommended] = useState("all");
  const endpoints = details("", recommended);
  function handleClick(event) {
    setRecommended(event.target.name);
  }
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPop, setIsLoadingPop] = useState(true);

  const [trendData, setTrendData] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    setIsLoadingPop(true);
    setTimeout(async () => {
      const fetchData = await axios.get(endpoints.popular);
      const getData = await fetchData.data.results;
      setData(getData);
      setIsLoadingPop(false);
    }, 8000);
  }, []);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      const fetchData = await axios.get(endpoints.trending);
      const getData = await fetchData.data.results;
      setTrendData(getData);
      setIsLoading(false);
    }, 4000);
  }, [recommended]);

  return (
    <>
      <Hero />
      <div className="mt-8 px-28 flex flex-col max-md:px-6 max-lg:px-16 py-6 bg-gradient-to-t from-[rgba(2,6,23,1)] via-[#040c2c] to-[rgba(2,6,23,1)]">
        <div className="flex items-center mb-8 gap-5 max-sm:flex-col  max-md:flex-col">
          <h1 className="text-3xl font-bold text-slate-200 max-sm:text-xl  max-md:text-2xl">
            Recommended
          </h1>
          <div className="flex items-center text-gray-200 rounded-xl bg-slate-900 w-fit p-2 max-xxm:text-sm transition-all duration-300">
            <button
              onClick={(event) => handleClick(event)}
              name="all"
              className={`px-8 py-2 ${
                recommended === "all" ? "bg-indigo-500" : ""
              } rounded-lg max-sm:px-4 max-md:px-6 max-xxm:px-2 transition-all duration-300`}
            >
              Trending
            </button>
            <button
              onClick={handleClick}
              name="movie"
              className={`px-8 py-2 ${
                recommended === "movie" ? "bg-indigo-500" : ""
              } rounded-lg max-sm:px-4 max-md:px-6 max-xxm:px-2 transition-all duration-300`}
            >
              Movies
            </button>
            <button
              onClick={handleClick}
              className={`px-8 py-2 ${
                recommended === "tv" ? "bg-indigo-500" : ""
              } rounded-lg max-sm:px-4 max-md:px-6 max-xxm:px-2 transition-all duration-300`}
              name="tv"
            >
              TV Shows
            </button>
          </div>
        </div>
        <Content data={trendData} isLoading={isLoading} />
      </div>
      <div className="mt-8 px-28 flex flex-col max-sm:px-10 max-md:px-10 max-lg:px-16 py-6 bg-gradient-to-t from-[rgba(2,6,23,1)] via-[#040c2c] to-[rgba(2,6,23,1)]">
        <div className="flex items-center mb-8 gap-5 max-sm:flex-col mt-14  max-md:flex-col">
          <h1 className="text-3xl font-bold text-slate-200 max-sm:text-xl  max-md:text-2xl">
            Popular on Filmbox
          </h1>
        </div>
        <Content data={data} isLoading={isLoadingPop} />
      </div>
    </>
  );
}

export default Home;
