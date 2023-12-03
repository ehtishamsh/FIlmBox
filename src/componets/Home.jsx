import { useState, useEffect } from "react";
import Hero from "./Hero";
import TopContent from "./Trending";
import Popular from "./Popular";

function Home() {
  return (
    <>
      <Hero />
      <TopContent />
      <Popular />
    </>
  );
}

export default Home;
