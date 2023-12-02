import { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import TopContent from "./TopContent";
import Footer from "./Footer";

function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <TopContent />
      <Footer />
    </div>
  );
}

export default Home;
