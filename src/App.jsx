import { useEffect, useState } from "react";
import "./App.css";
import Home from "./componets/Home";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TvAndMovies from "./componets/TvAndMovies";
import Single from "./componets/Details";
import Layout from "./Layout";
import Details from "./componets/Details";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((res) => setData(res.data));
  }, []);
  console.log(data);

  return (
    <div className="w-full bg-slate-950">
      <Router>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<TvAndMovies />} />
            <Route path="details/:id" element={<Details />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
