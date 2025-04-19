import Link from "next/link";

export default function Blogs() {
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

      <div className="py-10 flex items-center justify-center gap-8 flex-col">
        <div>
          <p>print only log message</p>
          <code>npm run start {">"} server.log</code>
        </div>
        <div>
          <p>print log message & error</p>
          <code>
            npm run start {">"} server.log 2{">"}&1
          </code>
        </div>
        <div>
          <p>print log message & error</p>
          <p>old log message save in same file</p>
          <code>
            npm run start {">>"} server.log 2{">"}&1
          </code>
        </div>
      </div>
    </div>
  );
}
