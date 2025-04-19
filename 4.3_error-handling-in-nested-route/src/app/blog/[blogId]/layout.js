import Link from "next/link";

export default function ProjectLayout({ children }) {
  const randomNum = Math.random();
  console.log(randomNum);

  if (randomNum > 0.5) {
    throw new Error("Blog Id Layout Page Error.");
  }
  return (
    <section className="flex justify-between h-96 mt-16">
      {children}
      <aside className="min-w-3xs flex flex-col items-center gap-5 p-5 bg-sky-600">
        <h2 className="text-3xl font-medium">Page Sidebar</h2>

        <Link href="/">
          <button>Home</button>
        </Link>

        <Link href="/about">
          <button>About</button>
        </Link>
      </aside>
    </section>
  );
}
