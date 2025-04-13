"use client";
// Use This for Batter User Experience

import { useState } from "react";

export default function Likes() {
  const [likeCount, setLikeCount] = useState(0);

  console.log("Like Component.");

  // if (typeof localStorage !== "undefined") {
  //   console.log(localStorage, window);
  // }

  return (
    <div>
      <p>{likeCount} Likes</p>

      <button
        className="nav-link active"
        onClick={() => setLikeCount((prev) => prev + 1)}
      >
        CLICK
      </button>
    </div>
  );
}
