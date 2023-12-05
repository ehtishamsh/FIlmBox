import React from "react";
import { Link } from "react-router-dom";

function CardsSkeletons() {
  return (
    <Link
      to={`/`}
      className="flex flex-col relative gap-5 p-2 rounded-xl h-full bg-[rgba(146,146,146,0.12)] w-11/12 max-xxsm:w-full max-xl:pb-2 backdrop-blur-sm animate-pulse"
    >
      <div className="flex  items-center z-50 absolute top-0 left-0 py-1 px-2 mx-[18px] mt-[16px] bg-[rgba(0,0,0,0.65)] rounded-lg gap-1 backdrop-blur-sm">
        <div className="bg-gray-500 w-4 h-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 24 24"
            fill="#121212"
          >
            <path
              d="M13.7299 3.51001L15.4899 7.03001C15.7299 7.52002 16.3699 7.99001 16.9099 8.08001L20.0999 8.61001C22.1399 8.95001 22.6199 10.43 21.1499 11.89L18.6699 14.37C18.2499 14.79 18.0199 15.6 18.1499 16.18L18.8599 19.25C19.4199 21.68 18.1299 22.62 15.9799 21.35L12.9899 19.58C12.4499 19.26 11.5599 19.26 11.0099 19.58L8.01991 21.35C5.87991 22.62 4.57991 21.67 5.13991 19.25L5.84991 16.18C5.97991 15.6 5.74991 14.79 5.32991 14.37L2.84991 11.89C1.38991 10.43 1.85991 8.95001 3.89991 8.61001L7.08991 8.08001C7.61991 7.99001 8.25991 7.52002 8.49991 7.03001L10.2599 3.51001C11.2199 1.60001 12.7799 1.60001 13.7299 3.51001Z"
              stroke="#121212"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-gray-500 text-base bg-gray-500">Loading</p>
      </div>
      <div className="overflow-hidden rounded-lg h-full w-full bg-gray-500">
        <div className="w-full h-[24rem] max-md:h-[20rem]">
          <div className="flex items-center justify-center w-full h-full">
            <svg
              className="w-16 h-w-16 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
      </div>
      <h1 className="text-base rounded-2xl text-gray-500 font-bold p-3 max-xl:p-1  max-xl:text-sm max-sm:text-sm bg-gray-500 max-xxm:text-xs">
        Loading Title
      </h1>
    </Link>
  );
}

export default CardsSkeletons;
