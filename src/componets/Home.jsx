import { useState, useEffect } from "react";
import Hero from "./Hero";
import Content from "./Content";
import axios from "axios";
import details from "./MovieServices";

function Home() {
  const endpoints = details();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(endpoints.popular)
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log("error 444"));
  }, []);
  return (
    <>
      <Hero />
      <div className="mt-8 px-28 flex flex-col max-sm:px-10 max-md:px-10 max-lg:px-16 py-6 bg-gradient-to-t from-[rgba(2,6,23,1)] via-[#040c2c] to-[rgba(2,6,23,1)]">
        <div className="flex items-center mb-8 gap-5 max-sm:flex-col  max-md:flex-col">
          <h1 className="text-3xl font-bold text-slate-200 max-sm:text-xl  max-md:text-2xl">
            Recommended
          </h1>
          <div className="flex items-center text-gray-200 rounded-xl bg-slate-900 w-fit p-2 max-xxm:text-sm">
            <button className="px-8 py-2 rounded-lg max-sm:px-4 max-md:px-6 max-xxm:px-2">
              Trending
            </button>
            <button className="px-8 py-2 rounded-lg  max-sm:px-4 max-md:px-6 max-xxm:px-2 bg-indigo-500">
              Movies
            </button>
            <button className="px-8 py-2 rounded-lg  max-sm:px-4 max-md:px-6 max-xxm:px-2">
              TV Shows
            </button>
          </div>
        </div>
        <Content data={data} type={"movies"} />
      </div>
      <div className="mt-8 px-28 flex flex-col max-sm:px-10 max-md:px-10 max-lg:px-16 py-6 bg-gradient-to-t from-[rgba(2,6,23,1)] via-[#040c2c] to-[rgba(2,6,23,1)]">
        <div className="flex items-center mb-8 gap-5 max-sm:flex-col mt-14  max-md:flex-col">
          <h1 className="text-3xl font-bold text-slate-200 max-sm:text-xl  max-md:text-2xl">
            Popular on Filmbox
          </h1>
        </div>
        <Content data={data} type={"movies"} />
      </div>
    </>
  );
}

export default Home;
