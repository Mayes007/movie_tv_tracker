import React from "react";

function MediaCard({ media }) {
  return (
    <div className="media-card">
      <h3>{media.title}</h3>
      <p>Type: {media.type}</p>
      <p>Status: {media.status}</p>
    </div>
  );
}

export default MediaCard;