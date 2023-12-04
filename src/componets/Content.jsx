import React from "react";
import Cards from "./Cards";

function Content({ data, type }) {
  const createCards = data.map((item) => {
    return (
      <Cards
        key={item.id}
        title={item.title}
        imgUrl={item.poster_path}
        id={item.id}
        type={type}
        rating={item.vote_average}
      />
    );
  });
  return (
    <div className="grid grid-cols-[repeat(_4,auto)] pb-5 justify-between gap-y-7 max-xxsm:gap-x-[4px] max-md:grid-cols-[repeat(_3,auto)]  max-sm:grid-cols-[repeat(_2,auto)] ">
      {createCards}
    </div>
  );
}

export default Content;
