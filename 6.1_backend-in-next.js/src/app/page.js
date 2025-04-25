import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold">Backend in Next.js</h1>

      <Link
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        href="/api"
      >
        API Page on Running New Server
      </Link>
    </div>
  );
}
