import Link from "next/link";

export default function Service() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Dashboard Page</h1>

      <Link href="/dashboard/admin">Admin Page</Link>
      <Link href="/dashboard/agent">Agent Page</Link>
      <Link href="/dashboard/user">User Page</Link>
    </div>
  );
}
