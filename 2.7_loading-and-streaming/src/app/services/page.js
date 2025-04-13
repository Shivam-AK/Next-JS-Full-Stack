import Comments from "@/components/Comments";
import Likes from "@/components/Likes";
import Views from "@/components/Views";
import Link from "next/link";
import { Suspense } from "react";

export default async function Services({ searchParams }) {
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
            <li>Web Development</li>
            <li>Mobile App Development</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Suspense fallback={<p>Loading Views...</p>}>
            <Views />
          </Suspense>
          <Suspense fallback={<p>Loading Likes...</p>}>
            <Likes />
          </Suspense>
          <Suspense fallback={<p>Loading Comments...</p>}>
            <Comments />
          </Suspense>
        </div>
      </div>
    </>
  );
}
