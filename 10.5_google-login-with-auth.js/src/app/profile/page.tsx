"use client";

import SignOut from "@/components/SignOut";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const userData = useSession();
  const { data: session, status } = userData;

  console.log(userData);

  if (status === "unauthenticated") return redirect("/login");

  if (!session?.user) {
    return (
      <div className="min-h-screen grid place-content-center">
        <p>Loading...</p>
      </div>
    );
  }

  const { user, expires } = session;
  const formattedDate = new Date(expires).toLocaleString();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          User Profile
        </h1>

        <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 text-center">
          <SignOut />
          <img
            src={user.image as string}
            alt={user.name as string}
            className="w-18 h-18 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            {user.name}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-2">{user.email}</p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Session Expires:
            <br />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {formattedDate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
