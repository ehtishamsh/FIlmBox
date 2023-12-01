import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import TopContent from "./TopContent";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <TopContent />
    </>
  );
}

export default Home;
