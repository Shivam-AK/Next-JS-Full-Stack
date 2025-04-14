import Comments from "@/components/Comments";
import Likes from "@/components/Likes";
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
            <li>Web Development</li>
            <li>Mobile App Development</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Comments />
          <Likes />
        </div>
      </div>
    </>
  );
}
