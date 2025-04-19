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
        <h2 className="text-3xl">Blog Page Error</h2>
        <button
          className="nav-link active cursor-pointer"
          onClick={() =>
            startTransition(() => {
              router.refresh();
              reset();
            })
          }
        >
          Try again to reload Blog Page Component
        </button>
      </div>
    </div>
  );
}
