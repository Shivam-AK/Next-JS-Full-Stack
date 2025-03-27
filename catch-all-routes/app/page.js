import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Catch All Routes</h1>

      <Link href="/asus/rog/phone/5">
        <button>Random Multiple Route</button>
      </Link>

      <Link href="/files">
        <button>File Manager</button>
      </Link>
    </div>
  );
}
