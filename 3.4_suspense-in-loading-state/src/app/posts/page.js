import PostItems from "@/components/PostItems";
import SlowResponse1 from "@/components/SlowResponse1";
import SlowResponse2 from "@/components/SlowResponse2";
import Link from "next/link";
import { Suspense } from "react";

export default async function Posts() {
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
            <Link href="/posts" className="nav-link active">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Posts Page</h1>
        <Suspense
          fallback={
            <div className="posts-container">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="post-card">
                  <h2 className="shimmer-heading"></h2>
                  <p className="shimmer-text"></p>
                </div>
              ))}
            </div>
          }
        >
          <PostItems />
        </Suspense>
        <Suspense fallback={<div className="shimmer-heading"></div>}>
          <SlowResponse1 />
        </Suspense>
        <Suspense fallback={<div className="shimmer-heading"></div>}>
          <SlowResponse2 />
        </Suspense>
      </div>
    </>
  );
}
