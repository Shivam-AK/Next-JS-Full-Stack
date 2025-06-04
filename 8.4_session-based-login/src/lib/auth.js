import { cookies } from "next/headers";
import connectDB from "./connectDB";
import User from "@/models/user.model";
import Session from "@/models/session.model";
import { createHmac } from "crypto";

export async function getLoggedInUser() {
  await connectDB();
  const cookieStore = await cookies();

  const errorResponse = Response.json(
    { error: "Please Login." },
    {
      status: 401,
    }
  );

  const cookie = cookieStore.get("userId")?.value;

  if (!cookie) return errorResponse;

  const sessionId = verifyCookie(cookie);

  if (!sessionId) return errorResponse;

  const session = await Session.findById(sessionId);

  if (!session) return errorResponse;

  const user = await User.findById(session.userId);

  if (!user) return errorResponse;

  return user;
}

export function signCookie(cookie) {
  const signature = createHmac("sha256", process.env.COOKIE_SECRET)
    .update(cookie)
    .digest("hex");

  return `${cookie}.${signature}`;
}

export function verifyCookie(signedCookie) {
  const [sessionId, signaturedCookie] = signedCookie.split(".");

  const signature = signCookie(sessionId).split(".")[1];

  if (signature === signaturedCookie) return sessionId;

  return false;
}
