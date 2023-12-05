import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import details from "./MovieServices";

export default function Details() {
  const { id } = useParams();
  const endpoints = details(id);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    setTimeout(async () => {
      const getFetch = await axios.get(endpoints.detailsMovie);
      const getData = await getFetch.data;
      setData(getData);
      setIsLoading(false);
    }, [5000]);
  }, []);
  return (
    <div
      className="w-full h-full flex flex-col gap-8 pt-36 pb-28 bg-cover object-cover overflow-x-hidden px-28 max-lg:px-16 max-md:px-8 max-sm:px-8"
      style={{ backgroundImage: `url("/Background.png")` }}
    >
      <div className="w-full relative h-auto ">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            data && data.backdrop_path
          }`}
          alt=""
          className="w-full object-cover rounded-[40px] opacity-70 h-[480px] max-md:h-[300px] max-sm:h-[250px]"
        />
        <div className="flex flex-col gap-2 absolute -bottom-16 ml-20 z-40 w-2/6   max-md:ml-0 max-sm:ml-0 max-md:rounded-lg max-sm:rounded-lg max-md:w-full max-sm:w-full max-lg:w-2/5 max-md:p-6 max-sm:p-4 p-10 bg-[rgba(2,6,28,0.31)] rounded-3xl bg-opacity-30 backdrop-blur-md">
          <p className="text-indigo-600 text-sm">Filmbox / Movie</p>
          <h2 className="text-slate-200 text-2xl font-bold max-md:text-lg max-sm:text-base">
            {data && data.title}
          </h2>
        </div>
      </div>
      <div className="mt-28 flex justify-center max-md:flex-col max-sm:flex-col  h-[700px] max-md:h-full px-10 max-md:px-0 w-full items-center gap-20 max-md:gap-10 max-sm:gap-10">
        <div className="w-1/2 max-md:full max-sm:w-full h-full">
          <img
            src={`https://image.tmdb.org/t/p/w500${data && data.poster_path}`}
            className="object-cover h-full rounded-[35px] max-md:h-[400px]"
            alt=""
          />
        </div>
        <div className="flex flex-col w-1/2 max-md:w-full max-md:text-base max-md:text-center gap-6 max-md:gap-2 max-sm:gap-2 h-full max-md:-order-1 text-slate-200 text-xl">
          <h1 className="text-2xl font-bold max-md:text-lg ">
            {data && data.tagline}
          </h1>
          <p className="font-normal text-slate-500">{data && data.overview}</p>
          <div className="w-full max-md:flex max-md:justify-center max-md:items-center">
            <div className="py-2 px-4 bg-[rgb(0,0,0)] w-fit opacity-70 rounded-lg gap-2 backdrop-blur-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.7299 3.51001L15.4899 7.03001C15.7299 7.52002 16.3699 7.99001 16.9099 8.08001L20.0999 8.61001C22.1399 8.95001 22.6199 10.43 21.1499 11.89L18.6699 14.37C18.2499 14.79 18.0199 15.6 18.1499 16.18L18.8599 19.25C19.4199 21.68 18.1299 22.62 15.9799 21.35L12.9899 19.58C12.4499 19.26 11.5599 19.26 11.0099 19.58L8.01991 21.35C5.87991 22.62 4.57991 21.67 5.13991 19.25L5.84991 16.18C5.97991 15.6 5.74991 14.79 5.32991 14.37L2.84991 11.89C1.38991 10.43 1.85991 8.95001 3.89991 8.61001L7.08991 8.08001C7.61991 7.99001 8.25991 7.52002 8.49991 7.03001L10.2599 3.51001C11.2199 1.60001 12.7799 1.60001 13.7299 3.51001Z"
                  stroke="rgb(250 204 21)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-yellow-400">
                {data && data.vote_average.toFixed(1)}
              </p>
            </div>
          </div>
          <p className="flex flex-col text-slate-500 text-base max-md:text-sm">
            Type
            <span className="text-slate-200 text-xl max-md:text-base">
              Movie
            </span>
          </p>

          <p className="flex flex-col text-slate-500 text-base max-md:text-sm">
            Release Date:
            <span className="text-slate-200 text-xl max-md:text-base">
              {data && data.release_date}
            </span>
          </p>
          <p className="flex flex-col text-slate-500 text-base max-md:text-sm">
            Run time
            <span className="text-slate-200 text-xl max-md:text-base">
              {data && data.runtime} min
            </span>
          </p>
          <p className="flex flex-col text-slate-500 text-base max-md:text-sm">
            Genres
            <span className="flex gap-3">
              <span className="text-slate-200 flex gap-24 text-xl max-md:text-base">
                {data && data.genres[0].name}
              </span>
              <span className="text-slate-200 flex gap-24 text-xl max-md:text-base">
                {data && data.genres[1].name}
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
