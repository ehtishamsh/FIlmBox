import React, { useEffect } from "react";
import Cards from "./Cards";
import CardsSkeletons from "./Skeletons/CardSkeletons";
import { useNavigate } from "react-router-dom";
function Content({ data, isLoading, type }) {
  const navigate = useNavigate();
  const createCards =
    data !== undefined &&
    data.map((item) => {
      return (
        <Cards
          key={item.id}
          title={item.title || item.name}
          imgUrl={item.poster_path}
          id={item.id}
          type={item.media_type || type}
          rating={item.vote_average}
        />
      );
    });
  const arr = [1, 2, 3, 4];
  const getSkeletons = arr.map((item) => {
    return <CardsSkeletons key={item} />;
  });

  useEffect(() => {
    if (data === undefined) {
      const timeoutId = setTimeout(() => {
        navigate("/404", { state: { message: "Failed to Fetch Data" } });
      }, 8000);

      return () => clearTimeout(timeoutId);
    }
  }, [data, navigate]);

  return (
    <div className="grid grid-cols-[repeat(_4,_minmax(_0px,_1fr))] pb-5 justify-between gap-y-7 max-sm-x-[8px] max-xxsm:gap-x-[8px] max-md:grid-cols-[repeat(_3,1fr)]  max-sm:grid-cols-[repeat(_2,1fr)] ">
      {data === undefined
        ? getSkeletons
        : isLoading
        ? getSkeletons
        : createCards}
    </div>
  );
}

export default Content;
