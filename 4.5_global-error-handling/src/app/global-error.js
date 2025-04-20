"use client";

import "./globals.css";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function GlobalError({ error, reset }) {
  const router = useRouter();

  console.log(error);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Root Layout Error</title>
      </head>
      <body>
        <div>
          <h1>Something want wrong on Root Layout.</h1>

          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-3xl">Root Layout Error</h2>
            <p>{error.message}</p>
            <button
              className="nav-link active cursor-pointer"
              onClick={() =>
                startTransition(() => {
                  router.refresh();
                  reset();
                })
              }
            >
              Try again to reload Root Layout Component
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
