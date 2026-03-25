import React, { useEffect, useState } from "react";
import pb from "../services/pocketbase";
import MediaCard from "../components/MediaCard";
import AddMedia from "../components/AddMedia";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all"); // all / plan / watching / completed

  // Fetch all movies once
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const records = await pb.collection("media").getFullList({
        filter: `type = "movie"`,
        sort: "title",
      });
      setMovies(records);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  // Group movies by status
  const groupedMovies = {
    plan: movies.filter((m) => m.status === "plan"),
    watching: movies.filter((m) => m.status === "watching"),
    completed: movies.filter((m) => m.status === "completed"),
  };

  return (
    <div>
      <h1>Movies</h1>

      {/* Add Media Form */}
      <AddMedia onAdd={fetchMovies} />

      {/* Status Filter Buttons */}
      <div className="status-buttons">
        {["all", "plan", "watching", "completed"].map((s) => (
          <button
            key={s}
            onClick={() => setSelectedStatus(s)}
            style={{
              backgroundColor: selectedStatus === s ? "gold" : "gray",
              margin: "5px",
              padding: "5px 10px",
            }}
          >
            {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      {/* Display Movies by Status */}
      {["plan", "watching", "completed"].map((status) =>
        selectedStatus === "all" || selectedStatus === status ? (
          <div key={status}>
            <h2 style={{ color: "gold", marginLeft: "20px" }}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </h2>
            <div className="media-grid">
              {groupedMovies[status].map((movie) => (
                <MediaCard key={movie.id} media={movie} />
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default Movies;