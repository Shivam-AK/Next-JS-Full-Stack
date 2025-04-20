"use client";
import { useState } from "react";

export default function About() {
  const [users, setUsers] = useState(["Shivam", "Rohan", "Chetan"]);
  return (
    <div>
      <h1>About Us</h1>
      <p>We are a company dedicated to providing quality services.</p>

      <div className="flex justify-between py-10">
        <button
          className="nav-link active cursor-pointer"
          onClick={() => console.log(first)}
        >
          Throw Normal Error
        </button>

        <button
          className="nav-link active cursor-pointer"
          onClick={() => setUsers(null)}
        >
          Reset User to Throw Exception Error
        </button>
      </div>

      {users.map((user) => (
        <p key={user}>{user}</p>
      ))}
    </div>
  );
}
