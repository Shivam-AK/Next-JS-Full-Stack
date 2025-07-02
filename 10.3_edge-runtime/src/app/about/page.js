import { cookies } from "next/headers";
import { redirect } from "next/navigation";
// import fs from "fs";

export const runtime = "edge"; // Default "nodejs"

export default async function About() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) redirect("/login");

  // console.log(fs); // Error: The edge runtime does not support Node.js 'fs' module.
  // console.log(process) // Edge runtime process only contains env object

  return (
    <div className="flex flex-col gap-2.5 justify-center items-center h-svh">
      <h2 className="font-bold text-5xl">About Page</h2>
    </div>
  );
}
