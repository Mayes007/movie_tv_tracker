import React, { useState } from "react";
import pb from "../services/pocketbase";

function AddMedia({ onAdd }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("movie");
  const [status, setStatus] = useState("plan");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please enter a title");
      return;
    }

    try {
      // Create record in PocketBase
      const record = await pb.collection("media").create({
        title,
        type,
        status,
      });

      // Callback to refresh the list
      onAdd(record);

      // Reset form
      setTitle("");
      setType("movie");
      setStatus("plan");
    } catch (err) {
      console.error("Error uploading media:", err);
      alert("Failed to upload media");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        margin: "20px 0",
      }}
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", width: "250px", borderRadius: "5px", border: "1px solid #ccc" }}
      />

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ padding: "8px", width: "250px", borderRadius: "5px", border: "1px solid #ccc" }}
      >
        <option value="movie">Movie</option>
        <option value="tv show">TV Show</option>
      </select>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={{ padding: "8px", width: "250px", borderRadius: "5px", border: "1px solid #ccc" }}
      >
        <option value="plan">Plan to Watch</option>
        <option value="watching">Watching</option>
        <option value="completed">Completed</option>
      </select>

      <button type="submit" style={{ padding: "8px 15px", borderRadius: "5px", backgroundColor: "gold", fontWeight: "bold", cursor: "pointer" }}>
        Add Media
      </button>
    </form>
  );
}

export default AddMedia;