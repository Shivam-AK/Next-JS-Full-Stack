import Link from "next/link";

export default function Blogs() {
  return (
    <div>
      <h1 className="title">Our Blog Page</h1>
      <p>All Blog Page Here.</p>
      <div className="flex flex-col py-10 justify-center items-center gap-4">
        <Link href="/blog/1">
          <button className="nav-link active cursor-pointer">Blog 1</button>
        </Link>
        <Link href="/blog/2">
          <button className="nav-link active cursor-pointer">Blog 2</button>
        </Link>
        <Link href="/blog/3">
          <button className="nav-link active cursor-pointer">Blog 3</button>
        </Link>
      </div>
    </div>
  );
}
