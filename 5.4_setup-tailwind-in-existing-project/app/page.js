import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-svh flex justify-center items-center">
      <main className="flex flex-col justify-center items-center gap-8">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-sans">
          Setup Tailwind v4 in Existing Next.js Project
        </h1>

        <h3 className="text-2xl font-sans">How to install</h3>
        <code className="text-xl font-mono">
          npm install tailwindcss @tailwindcss/postcss postcss
        </code>
      </main>
    </div>
  );
}
