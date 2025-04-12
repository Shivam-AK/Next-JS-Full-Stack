import { cookies } from "next/headers";
import Link from "next/link";

// First Way to create a Dynamic Rendering
// export const dynamic = "force-dynamic";

// All Way to create a Dynamic Rendering
// https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-apis
export default async function Services({ searchParams }) {
  // Second Way to create a Dynamic Rendering
  const search = await searchParams;
  console.log("Service Page :", search);

  // Third Way to create a Dynamic Rendering
  // const cookieStore = await cookies();
  // console.log(cookieStore);
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
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link active">
              Services
            </Link>
          </li>
          <li>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h1>Our Services</h1>
        <ul className="services-list">
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Consulting Services</li>
          <li>Digital Marketing</li>
        </ul>
      </div>
    </>
  );
}
