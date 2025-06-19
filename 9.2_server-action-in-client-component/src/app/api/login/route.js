import { signCookie } from "@/lib/auth";
import connectDB from "@/lib/connectDB";
import Session from "@/models/session.model";
import User from "@/models/user.model";
import { cookies } from "next/headers";

export async function POST(request) {
  await connectDB();
  const { email, password } = await request.json();
  const cookieStore = await cookies();

  if (
    [email, password].some(
      (value) => value === undefined || value?.trim() === ""
    )
  ) {
    return Response.json(
      { error: "All Fields are required." },
      {
        status: 417,
      }
    );
  }

  const validateEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  if (!validateEmail(email)) {
    return Response.json(
      { error: "Please Enter Valid E-mail Address." },
      {
        status: 406,
      }
    );
  }

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return Response.json(
      { error: "Unauthorized User. Register Now" },
      {
        status: 401,
      }
    );
  }

  // Check User Password
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!user || !isPasswordValid) {
    return Response.json(
      { error: "Invalid Credentials." },
      {
        status: 400,
      }
    );
  }

  const session = await Session.create({ userId: user.id });

  cookieStore.set("userId", signCookie(session.id), {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24,
  });

  return Response.json(
    {
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    },
    {
      status: 200,
    }
  );
}
