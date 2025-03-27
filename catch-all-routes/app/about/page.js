import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>About Page</h1>

      <Link href="/">
        <button>Home Page</button>
      </Link>
    </div>
  );
}
