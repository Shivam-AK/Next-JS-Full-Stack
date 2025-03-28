import Link from "next/link";

export default function ProjectLayout({ children }) {
  return (
    <section className="flex justify-between h-full mt-16">
      {children}
      <aside className="min-w-3xs flex flex-col items-center gap-5 p-5 bg-sky-600">
        <h2 className="text-3xl font-medium">Project Sidebar</h2>

        <Link href="/project/apple-clone">
          <button>Apple Clone</button>
        </Link>

        <Link href="/project/react-app">
          <button>React App</button>
        </Link>
      </aside>
    </section>
  );
}
