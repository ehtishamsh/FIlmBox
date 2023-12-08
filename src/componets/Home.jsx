import { useState, useEffect } from "react";
import Hero from "./Hero";
import axios from "axios";
import details from "./MovieServices";
import Recommended from "./Recommended";
import Popular from "./Popular";

function Home() {
  const [recommended, setRecommended] = useState("all");

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
  return (
    <>
      <Hero />

      <Recommended
        recommended={recommended}
        handleClick={handleClick}
        isLoading={isLoading}
        trendData={trendData}
      />
      <Popular data={data} isLoadingPop={isLoadingPop} />
    </>
  );
}

export default Home;
