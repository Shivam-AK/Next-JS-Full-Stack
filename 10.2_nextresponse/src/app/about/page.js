import { getCurrentUser } from "@/actions/userActions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function About() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) redirect("/login");

  const user = await getCurrentUser();

  return (
    <div className="flex flex-col gap-2.5 justify-center items-center h-svh">
      {user.success ? (
        <>
          <h2 className="font-bold text-5xl">About Page</h2>
          <p>Username : {user.data.name}</p>
          <p>Email : {user.data.email}</p>
        </>
      ) : (
        <>
          <h3 className="font-bold text-5xl">User Not Found.</h3>
          <p>{user.error}</p>
        </>
      )}
    </div>
  );
}
