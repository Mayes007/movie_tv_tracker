import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <nav style={{ padding: "10px", backgroundColor: "#111", color: "white" }}>
      <Link to="/movies" style={{ marginRight: "10px", color: "gold" }}>Movies</Link>
      <Link to="/tvshows" style={{ color: "gold" }}>TV Shows</Link>
    </nav>

    <Routes>
      <Route path="/movies" element={<Movies />} />
      <Route path="/tvshows" element={<TVShows />} />
      <Route path="/" element={<Movies />} />
    </Routes>
  </BrowserRouter>
);