import { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import TopContent from "./TopContent";

function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <TopContent />
    </div>
  );
}

export default Home;
