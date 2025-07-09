export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <ol className="list-inside space-y-5 text-center font-[family-name:var(--font-geist-mono)] text-sm/5 sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Format Staged Files with Prettier and Fix Staged Files with ESLint
          </li>
          <li className="tracking-[-.01em]">
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-[family-name:var(--font-geist-mono)] font-semibold dark:bg-white/[.06]">
              npx lint-staged
            </code>
          </li>
          <li className="mb-2 tracking-[-.01em]">Script Command</li>
          <li className="tracking-[-.01em]">
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-[family-name:var(--font-geist-mono)] font-semibold dark:bg-white/[.06]">
              npm run lint:staged
            </code>
          </li>
        </ol>
      </main>
    </div>
  );
}
