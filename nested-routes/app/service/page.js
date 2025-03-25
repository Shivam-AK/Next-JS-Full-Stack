import Link from "next/link";

export default function Service() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>All Service</h1>

      <Link href="/service/web-dev">Web Development</Link>
      <Link href="/service/app-dev">App Development</Link>
      <Link href="/service/seo">SEO Service</Link>
    </div>
  );
}
