import { useState } from "react";
import "./App.css";
import Home from "./componets/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full bg-slate-950 pb-16">
      <Home />
    </div>
  );
}

export default App;
