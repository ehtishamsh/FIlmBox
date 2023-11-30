import { useState } from "react";
import Header from "./componets/Header";
import Hero from "./componets/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full bg-gray-900">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
