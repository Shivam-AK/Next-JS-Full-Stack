import { getLoggedInUser } from "@/lib/auth";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();

  const user = await getLoggedInUser();
  if (user instanceof Response) {
    return user;
  }

  cookieStore.delete("userId");

  return Response.json(null, {
    status: 200,
  });
}
