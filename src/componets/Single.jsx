import React from "react";
import { useParams } from "react-router-dom";

export default function Single() {
  const { id } = useParams();
  return <div className="bg-slate-100 text-slate-800 p-32">{id}</div>;
}
