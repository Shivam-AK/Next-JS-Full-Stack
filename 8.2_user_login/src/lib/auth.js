import { cookies } from "next/headers";
import connectDB from "./connectDB";
import User from "@/models/user.model";

export async function getLoggedInUser() {
  await connectDB();

  const errorResponse = Response.json(
    { error: "Please Login." },
    {
      status: 401,
    }
  );

  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  if (!userId) return errorResponse;

  const user = await User.findById(userId);

  if (!user) return errorResponse;

  return user;
}
