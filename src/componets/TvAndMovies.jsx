import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import TopContent from "./Trending";

export default function () {
  return (
    <div>
      <h2 className="text-7xl bg-red-600">Hello the is the movies page</h2>
      <Hero />
      <TopContent />
    </div>
  );
}