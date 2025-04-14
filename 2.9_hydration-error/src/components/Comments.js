"use client";

export default function Comments() {
  if (typeof window === "undefined") {
    return <p>500 Comments on Server.</p>;
  }
  return <p>500 Comments on Client.</p>;
}
