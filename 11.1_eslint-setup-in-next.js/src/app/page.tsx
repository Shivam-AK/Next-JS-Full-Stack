import Image from "next/image";

export default function Home() {
  // let abc = 12;
  // abc = "12";
  // console.log(abc);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          {/* <img
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
          /> */}
          {/* <script src=""></script> */}
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Linting Command</h2>
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
            npm run lint
          </code>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Checking Validity of Types Command
          </h2>
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
            npx tsc --noEmit
          </code>
        </div>
      </main>
    </div>
  );
}
