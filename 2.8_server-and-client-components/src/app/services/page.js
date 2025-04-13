// "use client";
// When you add "Use Client" to the page, every imported component is set as a "Use Client" component

import Comments from "@/components/Comments";
import Likes from "@/components/Likes";
import Views from "@/components/Views";
import Link from "next/link";

export default function Services() {
  console.log("Service Page.");
  return (
    <>
      <nav>
        <ul className="navbar">
          <li>
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link active">
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col gap-10">
        <div>
          <h1>Our Services</h1>
          <ul className="services-list">
            <li>Servers components execute only on the server</li>
            <li>
              Client components execute on the server as well as on the client
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Likes />
          <Views />
          <Comments />
        </div>
      </div>
    </>
  );
}
