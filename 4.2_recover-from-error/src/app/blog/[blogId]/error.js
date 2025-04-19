"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
  console.log(error.message, error.digest);

  const router = useRouter();

  return (
    <div>
      <h1>Something want wrong.</h1>

      <div className="flex flex-col justify-center items-center gap-4">
        <p className="!text-white">Try to reload this Page.</p>
        <button
          className="nav-link active cursor-pointer"
          onClick={() => window.location.reload()}
        >
          Try again to reload full page
        </button>
        <button
          className="nav-link active cursor-pointer"
          onClick={() =>
            startTransition(() => {
              router.refresh();
              reset();
            })
          }
        >
          Try again to reload Blog Component
        </button>
      </div>
    </div>
  );
}
