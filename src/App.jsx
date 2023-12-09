import { useEffect, useState } from "react";
import "./App.css";
import Home from "./componets/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import TvAndMovies from "./componets/TvAndMovies";
import Layout from "./Layout";
import Details from "./componets/Details";
import ErrorPage from "./componets/ErrorPage";
import Search from "./componets/Search";

function App() {
  return (
    <div className="w-full bg-slate-950">
      <Router>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movie" element={<TvAndMovies />} />
            <Route path="tv" element={<TvAndMovies />} />
            <Route path="movie/:id" element={<Details />} />
            <Route path="tv/:id" element={<Details />} />
            <Route path="search/:keyword" element={<Search />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
