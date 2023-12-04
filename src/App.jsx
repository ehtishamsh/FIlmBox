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
  return (
    <div className="w-full bg-slate-950">
      <Router>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<TvAndMovies />} />
            <Route path="tv" element={<TvAndMovies />} />
            <Route path="movies/:id" element={<Details />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
