import Link from "next/link";

export default function Blogs() {
  const randomNum = Math.random();
  console.log(randomNum);

  if (randomNum > 0.5) {
    throw new Error("Blog Page Error.");
  }
  return (
    <div>
      <h1>Welcome to Our Blog</h1>
      <div className="flex flex-col justify-center items-center gap-4">
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
