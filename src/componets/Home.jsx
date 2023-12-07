import { useState, useEffect } from "react";
import Hero from "./Hero";
import Content from "./Content";
import axios from "axios";
import details from "./MovieServices";
import Recommended from "./Recommended";
import Popular from "./Popular";

function Home() {
  const [recommended, setRecommended] = useState("all");

  const [searchData, setSearchData] = useState([]);
  const [checkSearch, setCheckSearch] = useState(false);
  const [searchLoading, setsearchLoading] = useState(true);
  const endpoints = details("", recommended);
  function handleClick(event) {
    setRecommended(event.target.name);
  }
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingPop, setIsLoadingPop] = useState(true);

  const localTrend = JSON.parse(localStorage.getItem("trending"));
  const [trendData, setTrendData] = useState(localTrend ? localTrend : []);
  const localPopular = JSON.parse(localStorage.getItem("popular"));
  const [data, setData] = useState(localPopular ? localPopular : []);
  useEffect(() => {
    setIsLoadingPop(true);
    setTimeout(async () => {
      if (data.length === 0) {
        const fetchData = await axios.get(endpoints.popular);
        const getData = await fetchData.data.results;
        setData(getData);
        localStorage.setItem("popular", JSON.stringify(getData));
      }
      setIsLoadingPop(false);
    }, 8000);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(async () => {
      const fetchData = await axios.get(endpoints.trending);
      const getData = await fetchData.data.results;
      setTrendData(getData);
      localStorage.setItem("trending", JSON.stringify(getData));
      setIsLoading(false);
    }, 4000);
  }, [recommended]);
  console.log(searchData);
  return (
    <>
      <Hero
        searchData={setSearchData}
        setsearch={setCheckSearch}
        loading={setsearchLoading}
      />
      {checkSearch === false ? (
        <>
          <Recommended
            recommended={recommended}
            handleClick={handleClick}
            isLoading={isLoading}
            trendData={trendData}
          />
          <Popular data={data} isLoadingPop={isLoadingPop} />
        </>
      ) : (
        <div className="mt-8 px-28 flex flex-col max-md:px-6 max-lg:px-16 py-6 bg-gradient-to-t from-[rgba(2,6,23,1)] via-[#040c2c] to-[rgba(2,6,23,1)]">
          <h1 className="text-slate-400 mb-7 text-2xl font-bold">
            Result {`(${searchData.length})`}
          </h1>
          <Content data={searchData} isLoading={searchLoading} />
        </div>
      )}
    </>
  );
}

export default Home;
