import { notFound } from "next/navigation";

export default async function Blog({ params }) {
  const { blogId } = await params;
  if (!/^\d+$/.test(blogId)) {
    notFound();
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold">
        <span className="text-cyan-400">{blogId}</span> Blog Page
      </h1>
    </div>
  );
}
