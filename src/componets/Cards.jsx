import React from "react";
import { Link } from "react-router-dom";

function Cards({ type, id, rating, imgUrl, title }) {
  console.log(type);
  return (
    <Link
      to={`/${type}/${id}`}
      className="flex justify-center items-center w-full h-full transition-all duration-200"
    >
      <div className="flex flex-col relative gap-5 p-2 rounded-xl h-full transition-all duration-200 bg-[rgba(146,146,146,0.12)] w-11/12 max-xxsm:w-full max-xl:pb-2 backdrop-blur-sm">
        <div className="flex  items-center z-50 absolute top-0 left-0 py-1 px-2 mx-[18px] mt-[16px] bg-[rgba(0,0,0,0.65)] rounded-lg gap-1 backdrop-blur-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.7299 3.51001L15.4899 7.03001C15.7299 7.52002 16.3699 7.99001 16.9099 8.08001L20.0999 8.61001C22.1399 8.95001 22.6199 10.43 21.1499 11.89L18.6699 14.37C18.2499 14.79 18.0199 15.6 18.1499 16.18L18.8599 19.25C19.4199 21.68 18.1299 22.62 15.9799 21.35L12.9899 19.58C12.4499 19.26 11.5599 19.26 11.0099 19.58L8.01991 21.35C5.87991 22.62 4.57991 21.67 5.13991 19.25L5.84991 16.18C5.97991 15.6 5.74991 14.79 5.32991 14.37L2.84991 11.89C1.38991 10.43 1.85991 8.95001 3.89991 8.61001L7.08991 8.08001C7.61991 7.99001 8.25991 7.52002 8.49991 7.03001L10.2599 3.51001C11.2199 1.60001 12.7799 1.60001 13.7299 3.51001Z"
              stroke="rgb(250 204 21)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-yellow-400 text-base">{rating.toFixed(1)}</p>
        </div>
        <div className="overflow-hidden rounded-lg  w-full">
          <img
            src={
              imgUrl !== null
                ? `https://image.tmdb.org/t/p/w500${imgUrl}`
                : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
            }
            alt=""
            className="object-cover bg-cover  w-full h-[25rem] max-sm:h-[16rem] hover:transform hover:scale-110 transition-all duration-500"
          />
        </div>
        <h1 className="text-base text-slate-200 font-bold p-2 max-xl:p-1  max-xl:text-sm max-sm:text-sm max-xxm:text-xs">
          {title}
        </h1>
      </div>
    </Link>
  );
}

export default Cards;
