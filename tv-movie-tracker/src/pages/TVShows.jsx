import React, { useEffect, useState } from "react";
import pb from "../services/pocketbase";
import MediaCard from "../components/MediaCard";
import AddMedia from "../components/AddMedia";

function TVShows() {
  const [shows, setShows] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all"); // all / plan / watching / completed

  // Fetch all TV shows once
  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      const records = await pb.collection("media").getFullList({
        filter: `type = "tv show"`,
        sort: "title",
      });
      setShows(records);
    } catch (err) {
      console.error("Error fetching TV shows:", err);
    }
  };

  // Helper: group shows by status
  const groupedShows = {
    plan: shows.filter((s) => s.status === "plan"),
    watching: shows.filter((s) => s.status === "watching"),
    completed: shows.filter((s) => s.status === "completed"),
  };

  return (
    <div>
      <h1>TV Shows</h1>

      {/* Add Media Form */}
      <AddMedia onAdd={fetchShows} />

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

      {/* Display Shows by Status */}
      {["plan", "watching", "completed"].map((status) =>
        selectedStatus === "all" || selectedStatus === status ? (
          <div key={status}>
            <h2 style={{ color: "gold", marginLeft: "20px" }}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </h2>
            <div className="media-grid">
              {groupedShows[status].map((show) => (
                <MediaCard key={show.id} media={show} />
              ))}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default TVShows;