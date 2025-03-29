import Image from "next/image";

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold">Page Not Found!</h1>
      <Image
        aria-hidden
        src="/404.gif"
        alt="Page Not Found"
        width={600}
        height={400}
      />
    </div>
  );
}
