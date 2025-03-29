"use client";

import { useParams, usePathname } from "next/navigation";

export default function BlogNotFound(props) {
  console.log(props);

  const params = useParams();
  const path = usePathname();
  console.log(params);

  return (
    <div className="flex flex-col items-center justify-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-5xl font-bold">Blog Not Found!</h1>

      <h2 className="text-4xl font-bold">
        <span className="text-cyan-400">{params.blogId}</span> Blog | Path{" "}
        <span className="text-cyan-400">{path}</span>
      </h2>
    </div>
  );
}
