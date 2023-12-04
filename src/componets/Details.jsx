import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  return (
    <div
      className="w-full h-full flex flex-col gap-8 pt-36 pb-28 bg-cover object-cover overflow-x-hidden px-28 max-lg:px-16 max-md:px-8 max-sm:px-8"
      style={{ backgroundImage: `url("/Background.png")` }}
    >
      <div className="w-full relative h-auto ">
        <img
          src="/heroImg.jpg"
          alt=""
          className="w-full object-cover rounded-[40px] opacity-70 h-[480px] max-md:h-[300px] max-sm:h-[250px]"
        />
        <div className="flex flex-col gap-2 absolute -bottom-16 ml-20 z-40 w-2/6   max-md:ml-0 max-sm:ml-0 max-md:rounded-lg max-sm:rounded-lg max-md:w-full max-sm:w-full max-lg:w-2/5 max-md:p-6 max-sm:p-4 p-10 bg-[rgba(2,6,28,0.31)] rounded-3xl bg-opacity-30 backdrop-blur-md">
          <p className="text-indigo-600 text-sm">Filmbox / Movie</p>
          <h2 className="text-slate-200 text-2xl font-bold max-md:text-lg max-sm:text-base">
            Avengers the Endgame
          </h2>
        </div>
      </div>
      <div className="mt-28 flex justify-center h-[700px] px-10 w-full items-center gap-20">
        <div className="w-1/2 h-full">
          <img
            src="/heroImg.jpg"
            className="object-cover h-full rounded-[35px]"
            alt=""
          />
        </div>
        <div className="flex flex-col w-1/2 gap-6 h-full text-slate-200 text-xl">
          <h1 className="text-2xl font-bold">
            Part of the journey is the end.
          </h1>
          <p className="font-normal text-slate-500">
            After the devastating events of Avengers: Infinity War, the universe
            is in ruins due to the efforts of the Mad Titan, Thanos. With the
            help of remaining allies, the Avengers must assemble once more in
            order to undo Thanos' actions and restore order to the universe once
            and for all, no matter what consequences may be in store.
          </p>
          <div className="flex items-center w-fit py-2 px-4 bg-[rgb(0,0,0)] opacity-70 rounded-lg gap-2 backdrop-blur-sm">
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
            <p className="text-yellow-400">7.1</p>
          </div>
          <p className="flex flex-col text-slate-500 text-base">
            Type
            <span className="text-slate-200 text-xl">Movie</span>
          </p>

          <p className="flex flex-col text-slate-500 text-base">
            Release Date:
            <span className="text-slate-200 text-xl">Movie</span>
          </p>
          <p className="flex flex-col text-slate-500 text-base">
            Run time
            <span className="text-slate-200 text-xl">Movie</span>
          </p>
          <p className="flex flex-col text-slate-500 text-base">
            Genres
            <span className="text-slate-200 text-xl">Movie</span>
          </p>
        </div>
      </div>
    </div>
  );
}